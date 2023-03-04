
import React from "react";
import PropTypes from "prop-types";
const cors = require('cors');
var Sentiment = require('sentiment');
const express = require("express");
const router = express.Router();
const csv = require("csv-parser");
const fs = require("fs");
// const streetmlalgo = ({ routesWithStreetNames }) => {
	// state={ street_data : []
	// ,
	// encode: null}
	// try {
	// 	const user = await User.findById(req.user.id).select('-password');
	// 	res.json(user);
	//   } catch (err) {
	// 	console.error(err.message);
	// 	res.status(500).send('Server Error');
	//   }
router.post('/api/street-safety',(req,res)=>{
	try{
		var output;
		const {routesWithStreetName} = req.body;
		var safetyScores = [];
		var street_data = [];
		function encode(x) {
			x = Number(x);
			if (x === 1) x = 4;
			else if (x == 2) x = 1;
			else if (x == 0) x = 3;
			else x = 2;
			return x;
		}
	
		fs.createReadStream("./streets.csv")
			.pipe(csv())
			.on("data", data => street_data.push(data))
			.on("end", () => {
				//console.log(street_data[1]);
	
				//console.log(x);
	
				
	
				var keywords = [" rd", " marg", " flyover", " expressway", "road"];
	
				
				//var routes=temp['routesWithStreetName'];
				//props;
				//var routes = routesWithStreetNames;
				console.log(routes);
				console.log(req.body['routesWithStreetName']);
				
				console.log(routesWithStreetName);
				console.log(routesWithStreetName);
				const routes = routesWithStreetName;
				var rc = 0,
					route,
					i,
					j;
				//for each selected route
				for (i in routes) {
					var roads = [];
					rc += 1;
					//console.log(i);
					route = routes[i];
					//console.log("hien"+routes[route]);
					//all places in route
					var place;
					for (j in route) {
						place = route[j];
						//console.log(place);
						place = place.toLowerCase();
						place = place.replace(" rd", " road");
						place = place.replace(".", " ");
						// extracting different areas in a place
						var places = place.split(",");
						//console.log(places);
						var k, p, l;
						for (k in places) {
							p = places[k];
							var key;
							for (l in keywords) {
								key = keywords[l];
								if (p.search(key) != -1) {
									p = p.replace(key, "");
									//console.log("hiiii"+p);
									if (
										roads.findIndex(function(ele) {
											return ele === p;
										}) == -1
									) {
										roads.push(p); //console.log("hiiii");
									}
									break;
								}
							}
						}
					}
					
					console.log("roads : "+roads);
					var c = 0;
					var safety = 0;
					// main_file = pd.read_csv('streets.csv', encoding='ISO-8859-1')
					// main_file=np.array(main_file)
					var streets = [];
					//console.log(street_data);
					for (var i = 1; i < street_data.length; i++) {
						streets.push(street_data[i]["Sreet name"]);
					}
					//console.log(streets);
					var road, street;
					for (i in roads) {
						road = roads[i];
						//console.log(road);
						for (j in streets) {
							street = streets[j];
							//road=str(road)
							//street=str(street)
							if (street.search(road) != -1) {
								var ele = streets.findIndex(function(element) {
									return element === street;
								});
								//console.log(street);
								safety += encode(street_data[ele]["safety"]);
								c += 1;
								break;
							}
						}
					}
					//safety score
					//console.log(c);
					if (c != 0) {
						//console.log(safety);
						safety = safety / c;
					} else safety = 2.0;
					//console.log("safety " + safety);
					//saving the results in the database
					//collection = db.pred_routes
					// output = {
					// "route": 'Route ' + str(rc),
					// "score": str(safety)
					// }
					// output = {
					// 	"score":String(safety)
					// }
					safetyScores.push(safety);
				}
				//console.log(safetyScores);
				output = {
					"scores" : safetyScores
				}
				//console.log("initial out"+output);
				console.log(safetyScores);
				res.json(safetyScores);
			});
			
			// console.log("output "+output);
			// console.log("safety scores"+safetyScores);
			// res.json(safetyScores);
		}
			catch(err){
				console.log(err.message);
				res.status(500).send('SERVER ERROR');
			}
});
app.listen(3001, () => {
	console.log(`SERVER STARTED AT PORT 3001`)
  });
	module.exports = router;
// };
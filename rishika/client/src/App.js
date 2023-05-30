/*import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [loading, setloading] = useState(false);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [searchSreet, setSearch] = useState("");

  useEffect(() => {

    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);

    });

  }, []);

  
return (
  <div className="App">
    <div>
      <input
        type="text"
        placeholder="Street..."
        onChange={(e) => setSearch(e.target.value)}
      />
      



    </div>

    <div className="usersDisplay">
      {listOfUsers
        .filter((value) => {
          if (searchSreet === "") {
            return value.Sreet;
          } else if (value.Sreet.toLowerCase().includes(searchSreet.toLowerCase())) {
            return value.Sreet;
          }
          
        })
        .map((user) => {
          return (
            <div>

              <h6>Street: {user.Sreet}</h6>
              <h6>Road: {user.road}</h6>
              <h6>Safety: {user.safety}</h6>
            </div>
          );
        }
        )}
    </div>


  </div>
);
}

export default App;

*/









import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [loading, setloading] = useState(false);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [searchSreet, setSearch] = useState("");

  useEffect(() => {

    Axios.get("http://localhost:4001/search").then((response) => {
      setListOfUsers(response.data);

    });

  }, []);

  
return (
  <div className="App">
    <div>
      <input
        type="text"
        placeholder="Company..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    <div align="center">  <button className="sb-btn" type="button" >SUBMIT</button> </div> 

    <div className="usersDisplay">
      {listOfUsers
        .filter((value) => {
          if (searchSreet ==="") {
            return value.company;
          } else if (value.company.toLowerCase().includes(searchSreet.toLowerCase())) {
            return value.company;
          }
          
        })
        .map((user) => {
          return (
            <div>

              <h6>Company: {user.company}</h6>
              <h6>Work Experience: {user.wp}</h6>
              <h6>Review: {user.review}</h6>
              <h6>Safety: {user.score}</h6>

            </div>
          );
        }
        )}
    </div>


  </div>
);
}

export default App;


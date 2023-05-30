/*const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  sreet: {
    type: String,
    required: true,
  },
  road: {
    type: String,
    required: true,
  },
  safty: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model("clients", UserSchema);
module.exports = UserModel;
*/






// import "./App.css";
// import { useState, useEffect } from "react";
// import Axios from "axios";

// function App() {
//   const [hide, toggleHide] = useState(true);
//   const [listOfUsers, setListOfUsers] = useState([]);
//   const [searchSreet, setSearch] = useState("");

//   useEffect(() => {

//     Axios.get("http://localhost:3001/getUsers").then((response) => {
//       setListOfUsers(response.data);

//     });

//   }, []);
//   // const searchData=async (event)=>{
//   //   const key =event.target.value;
//   //   let result =await fetch(`http://localhost:3001/getUsers/${key}`);
//   //   result=await result.json()
//   //   if(result){
//   //     setListOfUsers(result)
//   //   }
//   //   };



//   // const createUser = () => {
//   //   Axios.post("http://localhost:3001/createUser", {
//   //     name,
//   //     age,
//   //     username,
//   //   }).then((response) => {
//   //     setListOfUsers([
//   //       ...listOfUsers,
//   //       {
//   //         name,
//   //         age,
//   //         username,
//   //       },
//   //     ]);
//   //   });
//   // };

//   return (
//     <div className="App">
//       <div>
//         <input
//           type="text"
//           placeholder="Street..."
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button onClick={() =>toggleHide(!hide)}> {hide ? "show" : "hide"}Search</button>



//       </div>
//       <div className="usersDisplay">
//         {listOfUsers
//           .filter((value) => {
//             if (searchSreet === "") {
//               return value;
//             } else if (value.Sreet.toLowerCase().includes(searchSreet.toLowerCase())) {
//               return value;
//             }
//           })
//           .map((user) => {
//             return (
//               <div>

//                 {hide &&  <h6>Street: {user.Sreet}</h6>}
//               {hide && <h6>Road: {user.road}</h6>}
//               {hide && <h6>Safety: {user.safety}</h6>}
//               </div>
//             );
//           })}
//       </div>


//     </div>
//   );
// }

// export default App;





const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  wp: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: false,
  },
});

const companyModel = mongoose.model("user", companySchema);
module.exports = companyModel;



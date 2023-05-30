import "./App.css";
//import React, { Component } from 'react';
//import Modal from './modal';
import { useState, useEffect } from "react";
import Axios from "axios";


function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [company, setName] = useState("");
  const [wp, setwp] = useState("");
  const [review, setReview] = useState("");
  //const [score, setScore] = useState(0);
  useEffect(() => {
    Axios.get("http://localhost:3004/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3004/createUser", {
      company,
      wp,
      review,
      //score,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
            company,
            wp,
            review,
            //score,
        },
      ]);
    });
  };

  return (
    <div className="App">
          <div className="title">Give Your Feedback</div>
          
          <div align="center"><div className="App"></div></div>

          

            <div>
              <label>
              <div align="center">Company Name:</div>
                <input
          type="text"
          //placeholder="Company..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
              </label>
            </div>

            <div>
              <label>
              <div align="center"> Work Experience:</div>
               
                <input
          type="text"
          //placeholder="wp..."
          onChange={(event) => {
            setwp(event.target.value);
          }}
        />
              </label>
            </div>

            <div>
              <label>
              <div align="center"> Review:</div>
                <input
          type="text"
          //placeholder="Review..."
          onChange={(event) => {
            setReview(event.target.value);
          }}
        />
              </label>
            </div>
            <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.company}</h1>
              <h1>wp: {user.wp}</h1>
              <h1>Review: {user.review}</h1>
              
              
            </div>
          );
        })}
      </div>
            
               
      <div align="center">  <button className="sb-btn" type="button" onClick={createUser}>SUBMIT</button> </div>         
          </div>         
        );
       //run client npm start and server node index.js
  } 
  

















/*<div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.company}</h1>
              <h1>wp: {user.wp}</h1>
              <h1>Review: {user.review}</h1>
              //<h1>Score: {user.score}</h1>
              
            </div>
          );
        })}
      </div>
      

      <div>
        <input
          type="text"
          placeholder="Company..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="wp..."
          onChange={(event) => {
            setwp(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Review..."
          onChange={(event) => {
            setReview(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
        

      </div>
      </div>
  );
   
  
}*/

export default App;
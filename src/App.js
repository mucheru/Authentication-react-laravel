import './App.css';
import { Component } from 'react';
import Signup from "./components/signUp/Signup";
import Signin from "./components/SignIn/Signin";
import Home from "./components/Home/Home";
import {  Routes, Route, NavLink } from "react-router-dom";


class App extends Component {
  render(){
    let navLink = (
      <div className="Tab">
        <NavLink to="/sign-in" activeClassName="activeLink" className="signIn">
          Sign In
        </NavLink>
        <NavLink exact to="/" activeClassName="activeLink" className="signUp">
          Sign Up
        </NavLink>
      </div>
    )

    const login =localStorage.getItem("isLoggedIn")

    return (
      <div className="App">
        {login ? (
          <Routes>
            <Route exact path="/" element={<Signup/>}></Route>
            <Route path="/sign-in" element={<Signin/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<Signup/>}></Route>
            <Route path="/sign-in" element={<Signin/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
          </Routes>
        )}
      </div>
    );

  }
 
}

export default App;

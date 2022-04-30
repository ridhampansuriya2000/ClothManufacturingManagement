import React, { Component } from 'react';
import Header from "./components/header";//fouter
import Welcome from './components/welcome';
import Login from './components/login';
import Register from './components/register';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home.jsx"//dashbord;
import Raw from "./dashbord/stock/Raw.jsx"
import StockEntry from './dashbord/stock/StockEntry.jsx'
import Bill from './dashbord/Bill/Bill.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Testing from './testing/Testing.jsx'
import About_us from './About_us/About_us.jsx';
import EmployeeRegistration from './dashbord/Employee/EmployeeRegistration'
import Vendor from './dashbord/Vendor/Vendor'
import Footer from './Home/Footer';
import Reports from './Reports/Reports'
import Details from './Home/Details.jsx'
import Attendance from './dashbord/Employee_Attendance/Attendance';
import Stockin from './Reports/StockIn.jsx'
import Sellingin from './Reports/Sellingin.jsx'
import Salary from './Reports/Salary.jsx'
import Product from './Reports/Product.jsx'
import BillGenerate from './Reports/BillGenerate'
import EditStudent from './dashbord/Employee_Attendance/EditStudent'
import Post from './Reports/Post.jsx'

function App(props) {
  return (
    
    <Router>
      
      <Switch>
        
        <Route path="/register">
        <Home/>
          <Register />
        </Route> 
        <Route path="/login">
        <Home/>
          <Login />
        </Route>


        {/*<Route path="/" exact>*/}
        {/*  <Home/>*/}
        {/*<Footer/>*/}
        {/*<Details/>*/}
        {/*</Route>*/}

        <Route path="/Home">
          <Home />
        <Footer />
        <Details />
        </Route>

        

        <Route path="/Row">
          <Home />
          <Raw />
          <Details />
        </Route>

        <Route path="/StockEntry">
          <Home />
          <StockEntry/>

          <Details />

        </Route>

        <Route path="/EmployeeRegistration">
          <Home />
          <EmployeeRegistration />
          <Details />

        </Route>

        <Route path="/Vendor">
          <Home />
          <Vendor />
          <Details />

        </Route>

        <Route path="/Bill">
          <Bill />
        </Route>



        <Route path="/Attendance">
          <Home />
          <Attendance />
        </Route>

        <Route path="/edit">
          <Home />
          <EditStudent />
        </Route>



        <Route path="/Reports">
          <Home />
          <Reports />
          <Details />

        </Route>

        <Route path="/Stockin">
          <Home />
          <Stockin />
          <Details />
        </Route>

        <Route path="/Post">
          <Home />
          <Post />
          <Details />
        </Route>

        <Route path="/Salary">
          <Home />
          <Salary />
        </Route>

        <Route path="/Product">
          <Home />
          <Product />
          <Details />
        </Route>

        <Route path="/BillGenerate">
          <Home />
          <BillGenerate />
          <Details />
        </Route>

        <Route path="/About_us">
          <Home />
          <About_us />
          <Details />
        </Route>

        <Route path="/Testing">
          <Home />
          <Testing />
          <Details />
        </Route>




        <Route  path="/" exact>
          {/*<Home />*/}
          <Welcome/>
        </Route>

      </Switch>
    </Router>

  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import './components/css/reset.css';
import './components/css/style.css';
import './components/css/plugins.css';
import React from 'react';
import Home from './components/HomePage/Home';
import Contact from './components/Contact';
import Login from './components/LoginPage/Login';
import CategoriesPage from './components/CategoriesPage/CategoriesPage';
import DetailPage from './components/DetailPage/DetailPage';
import { Router } from '@reach/router';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';
import Blog from './components/BlogPage/Blog';
import BlogPost from './components/BlogPage/BlogPost'
import About from './components/About';
import SignUp from './components/LoginPage/SignUp'
//import Comment from './components/Comment'
//import singleblog from './components/singleblog';
//import Link from 'react-router';



class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <Home path="/"></Home>
          <Contact path="/Contact"></Contact>
          <Login path="/Login"></Login>
          <SignUp path="/SignUp"></SignUp>
          <Booking path="/Booking"></Booking>
          <Blog path="/Blog"></Blog>
          <CategoriesPage path="/portfolio"></CategoriesPage>
          <DetailPage path="/portfolio/:workId"></DetailPage>
          <DetailPage path="/portfolio/:workId/"></DetailPage>
          <About path="/About"></About>
          <Home path="/Dashboard/:userName"></Home>
          <BlogPost path="/post/:id"></BlogPost>
        </Router>
      </div>
    );
  }
}



export default App;

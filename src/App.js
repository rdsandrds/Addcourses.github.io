import React from 'react';
import logo from './logo.svg';
import './App.css';
import  { Button, Container,Row,Col } from "reactstrap";
import  { ToastContainer, toast } from 'react-toastify';
import Home from  "./components/Home";
import Header from "./components/Header";
import Course from "./components/Course";
import AllCourse from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Menues from './components/Menues';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/Aboutus";
import Cont from "./components/Contact";

function App() {

  const btnHandle = ()  => {
  
   toast("this is my first message");

  };

  return (
    <div>
    <Router>
    <ToastContainer />
    <Container>

      <Header/>
      <Row>
        <Col md={4}>
          <Menues/>
        </Col>
        <Col md={8}>
           
           <Route path="/" component={Home} exact />
           <Route path="/add-course" component={ AddCourse  } exact />
           <Route  path="/view-courses" component={ AllCourse } exact />
           <Route  path="/about-us" component={ About } exact />
           <Route  path="/contact" component={ Cont } exact />
          
        </Col>
      </Row>
    </Container>
     

    </Router>

</div>
  
  );
}


export default App;

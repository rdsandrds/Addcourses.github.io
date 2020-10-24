import  axios from "axios";
import React,  { Fragment , useEffect, useState} from "react";
import { toast } from "react-toastify";
import {Button, Container, Form, FormGroup,Input } from "reactstrap";
import base_url from "./../api/bootapi";
import Course from "./Course";



const AddCourse = ()=>{
    useEffect(() => {
        document.title = "Add Courses || Learn code ";
    }, [] );

     const [course, setCourse ] = useState({})
     
     const handleForm=(e)=>{
         console.log(course);
         postDatatoServer (course);
         e.preventDefault();
     }

     const postDatatoServer= (data) =>{
         axios.post(`${base_url}/courses`, data).then(
             (response) =>{
                 console.log(response);
                 console.log("success");
                 toast.success("course added succ");

             },
             (error) =>{
                 console.log(error);
                 console.log("errorrr");
                 toast.error("course added not yet");

             }
         )
     }   
  


    return(
  <Fragment>
      <h1 class="text-center m-3">Fill Form Details</h1>
      <Form onSubmit={handleForm}>

          <FormGroup>
              <label for="userId">Course Id</label>
              <Input type="text"
               placeholder="Enter here" 
                id="userId" 
                onChange={(e) => {
                     setCourse({ ...course,id: e.target.value})}}/>
          </FormGroup>

          <FormGroup>
              <label for="title">Course Title</label>
              <Input type="text" 
              placeholder="Enter the title here"  
              id="title" 
              onChange={(e)=>{
                   setCourse({ ...course,title:e.target.value})}}></Input>
          </FormGroup>


            <FormGroup>
                <label  for="description">Course description</label>
                <Input type="textarea"
                placeholder="Enter the text here" 
                id="description" 
                style={{height:100}} 
                onChange={(e)=>{
                     setCourse({ ...course,description:e.target.value})}}> </Input>
            </FormGroup>
           
           <FormGroup>
               <Container className="text-center">
                   <Button type="submit" color="success">Add Course</Button>
                   <Button  type="reset" color="warning ml-3">clear</Button>

               </Container>
           </FormGroup>
      </Form>
  </Fragment>


    )
}
export default AddCourse;
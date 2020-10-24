import React , { useState, useEffect }from "react";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourse = () => {

 useEffect(()=>{
document.title="All Courses";
 }, []);

const getALLCoursesFromServer = () => {

    axios.get(`${base_url}/courses`).then(
        (response)=>{
          //console.log(response);
          console.log(response.data);
           toast.success("courses has been loaded",{
               position:"bottom-center",
           });
           setCourses(response.data);
        },
        (error)=> {
            console.log(error);
            toast.error("something went wrong");

        }
    )
};

useEffect(()=> {
    getALLCoursesFromServer();
}, []);




const [courses,setCourses]= useState ([]);

return(


<div>
    <h1>All courses</h1>
    <p>List of courses are as follows</p>
    {
        courses.length>0 
        ? courses.map((item)=> <Course key={item.id} Course={item}/>) : "NO COURSES"

    }


</div>




);


};
export default AllCourse;

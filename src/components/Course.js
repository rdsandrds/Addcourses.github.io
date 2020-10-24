import Axios from "axios";
import React from "react";
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course = ({ Course }) => {

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("deleted the course")
            },
            (error)=>{
                toast.error("course not deleted")
            }
        )

    }
    return (
        <Card className="text-center">
            <CardBody>
    
            <CardSubtitle className="font-weight-bold">  { Course.title }  </CardSubtitle>
         
    <CardText> { Course.description }  </CardText>
                <Container  className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(Course.id);
                    }}>Delete</Button>
                    <Button color="success ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )

}
export default Course;
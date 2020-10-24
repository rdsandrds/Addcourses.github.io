import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
const Menues=()=>{
    return(

        <ListGroup>
            <Link className="list-group-item group-item-action" tag="a" to="/" action>
                Home
            </Link>
        
             <Link className="list-group-item group-item-action"  tag="a" to="/add-course" action>
                Add Course
             </Link>
               <Link className="list-group-item group-item-action"  tag="a" to="/view-courses" action>
                 View Courses
              </Link>
                <Link  className="list-group-item group-item-action"  tag="a" to="/about-us" action>
                About Us
              </Link>
              <Link className="list-group-item group-item-action"  tag="a" to="/contact" action>
                Contact
                </Link>
  
             </ListGroup>


    )
}
export default Menues;
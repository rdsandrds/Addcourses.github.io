import React, { useEffect } from "react";
import {  Button, Container, Jumbotron }  from "reactstrap";

const Home = () => {
    useEffect(() => {
        document.title = "Home || Learn code ";
    }, [] );

    return (
        <div>
      <Jumbotron className="text-center"> 
          <h1> LearnCode with me </h1>
          <p>
              this is my every thing asx u menyionec asx you knoe tgat is possible
          </p>
          <Container>
              <Button color="primary">START</Button>
          </Container>
      </Jumbotron>

        </div>


    )
}

export default Home;
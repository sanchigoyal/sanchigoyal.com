import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./Jumbotron.css";

const jumbotron = props => {
  return (
    <div>
      <Jumbotron fluid className="bg-cover text-center">
        <Container fluid>
          <img
            className="rounded-circle"
            src={props.imageUrl}
            alt="Sanchi Goyal"
            width="200"
            height="200"
          />
          <h2 className="jumbotron-heading">
            {props.firstName} {props.lastName}
          </h2>
          <h4 className="lead mb-0">
            {props.currentRole} at {props.currentCompany}
          </h4>
          <h4 className="lead">{props.lastEducation}</h4>
          <h5 className="lead text-dark ">{props.currentLocation}</h5>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbotron;

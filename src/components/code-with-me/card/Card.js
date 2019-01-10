import React from "react";
import { Card, CardBody, CardSubtitle, Badge } from "reactstrap";
import "./Card.css";

const card = props => {
  const topics = props.topics.map((topic, index) => {
    return (
      <Badge key={index} color="success" size="sm">
        {topic}
      </Badge>
    );
  });
  return (
    <Card>
      <CardBody>
        <a href={props.courseContent}>
          <h5 className="card-title">{props.heading}</h5>
        </a>
        <CardSubtitle className="lead">{props.children}</CardSubtitle>
        <Badge href={props.repositoryLink} size="sm">
          code: {props.repository}
        </Badge>
        <div>{topics}</div>
      </CardBody>
    </Card>
  );
};

export default card;

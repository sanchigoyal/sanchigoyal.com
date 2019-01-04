import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from "reactstrap";

const card = props => {
  let cardImage;
  let cardBodySize;
  if (props.image) {
    cardImage = (
      <Col sm="2" className="d-none d-md-block">
        <CardImg width="100%" src={props.image} alt="Card image cap" />
      </Col>
    );
    cardBodySize = "10";
  } else {
    cardImage = null;
    cardBodySize = "auto";
  }
  return (
    <Card>
      <Row>
        {cardImage}
        <Col sm={cardBodySize}>
          <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle className="lead">{props.subTitle}</CardSubtitle>
            <div className="text-muted">{props.duration}</div>
            <div className="text-muted">{props.location}</div>
            <div>{props.children}</div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default card;

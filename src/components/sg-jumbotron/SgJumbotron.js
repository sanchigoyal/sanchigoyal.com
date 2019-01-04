import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import sanchi_goyal from '../../resources/images/sanchi-goyal.jpg'
import './SgJumbotron.css'

const sgJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid className="bg-cover text-center">
        <Container fluid>
            <img className="rounded-circle" src={sanchi_goyal} alt="Sanchi Goyal" width="200" height="200"/>
            <h2 className="jumbotron-heading">Sanchi Goyal</h2>
            <h4 className="lead mb-0">Software Development Engineer III at Workday Inc.</h4>
            <h4 className="lead">Sikkim Manipal University of Health, Medical and Technological Sciences</h4>
            <h5 className="lead text-dark ">Pleasanton, California</h5>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default sgJumbotron;
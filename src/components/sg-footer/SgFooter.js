import React from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SgFooter.css";

const sgFooter = () => {
  return (
    <footer className="text-muted border-top pt-4">
      <Container>
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <div className="float-left">
          <p>
            <a
              href="https://www.linkedin.com/in/sanchi-goyal-45312761/"
              className="media-icon"
            >
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
            </a>
            <a href="https://github.com/sanchigoyal" className="media-icon">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/sanchi.goyal.1"
              className="media-icon"
            >
              <FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/sanchi.traveller/"
              className="media-icon"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
          </p>
          <p>sanchi.goyal.sg@gmail.com</p>
        </div>
      </Container>
    </footer>
  );
};

export default sgFooter;

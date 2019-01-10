import React, { Component } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./CourseContent.css";

class CourseContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseContent: ""
    };
  }

  componentDidMount() {
    const projectName = this.props.match.params.project;
    const readmelink =
      "https://raw.githubusercontent.com/sanchigoyal/" +
      projectName +
      "/master/README.md";

    axios
      .get(readmelink, {
        headers: {
          Accept: "application/json"
        },
        mode: "cors",
        cache: "no-cache"
      })
      .then(response => {
        const courseContent = response.data;
        this.setState({ courseContent });
      });
  }

  render() {
    return (
      <Container>
        <div class="course-content">
          <ReactMarkdown source={this.state.courseContent} />
        </div>
      </Container>
    );
  }
}

export default CourseContent;

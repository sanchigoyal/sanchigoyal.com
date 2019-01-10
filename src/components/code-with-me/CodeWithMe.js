import React, { Component } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import CardGroup from "./card-group/CardGroup";

class CodeWithMe extends Component {
  constructor() {
    super();
    this.state = {
      code: {
        projects: []
      }
    };
  }

  componentDidMount() {
    let profileId = "sanchi-goyal";
    let profileUrl =
      "https://s3-us-west-1.amazonaws.com/sanchigoyal.com/resources/profiles/" +
      profileId +
      "/code.json";

    axios
      .get(profileUrl, {
        headers: {
          Accept: "application/json"
        },
        mode: "cors",
        cache: "no-cache"
      })
      .then(response => {
        const code = {
          ...response.data
        };
        this.setState({ code });
      });
  }

  render() {
    return (
      <Container>
        <CardGroup cards={this.state.code.projects}></CardGroup>
      </Container>
    );
  }
}

export default CodeWithMe;

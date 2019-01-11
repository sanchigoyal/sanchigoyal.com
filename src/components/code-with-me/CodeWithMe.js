import React, { Component } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import SearchBar from "./search-bar/SearchBar";
import CardGroup from "./card-group/CardGroup";

class CodeWithMe extends Component {
  constructor() {
    super();
    this.state = {
      code: {
        projects: []
      },
      displayedProjects: []
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
        this.setState({ displayedProjects: code.projects });
      });
  }

  onSearchContentChange = event => {
    const searchString = event.target.value;
    if (!searchString || searchString === "") {
      // set to original list.
      this.setState({ displayedProjects: this.state.code.projects });
    } else {
      // obtain ones that are matching the search string.
      const displayedProjects = this.state.code.projects.filter(
        project =>
          project.heading
            .toLowerCase()
            .startsWith(searchString.toLowerCase()) ||
          project.heading.toLowerCase().includes(searchString.toLowerCase())
      );
      this.setState({ displayedProjects: displayedProjects });
    }
  };

  render() {
    return (
      <Container>
        <SearchBar change={this.onSearchContentChange} />
        <CardGroup cards={this.state.displayedProjects} />
      </Container>
    );
  }
}

export default CodeWithMe;

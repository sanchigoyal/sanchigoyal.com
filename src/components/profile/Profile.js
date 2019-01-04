import React, { Component } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import Jumbotron from "../jumbotron/Jumbotron";
import CardGroup from "../card-group/CardGroup";
import Skills from "../skills/Skills";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {
        experiences: [],
        educations: [],
        projects: [],
        skills: []
      }
    };
  }

  componentDidMount() {
    let profileId = "sanchi-goyal";
    let profileUrl =
      "https://s3-us-west-1.amazonaws.com/sanchigoyal.com/resources/profiles/" +
      profileId +
      "/profile.json";

    axios
      .get(profileUrl, {
        headers: {
          Accept: "application/json"
        },
        mode: "cors",
        cache: "no-cache"
      })
      .then(response => {
        const profile = {
          ...response.data
        };
        this.setState({ profile });
      });
  }

  render() {
    return (
      <div>
        <Jumbotron
          firstName={this.state.profile.firstName}
          lastName={this.state.profile.lastName}
          currentRole={this.state.profile.currentRole}
          currentCompany={this.state.profile.currentCompany}
          lastEducation={this.state.profile.lastEducation}
          currentLocation={this.state.profile.currentLocation}
          imageUrl={this.state.profile.profilePicture}
        />
        <Container>
          <CardGroup
            title="Experience"
            records={this.state.profile.experiences}
          />
          <CardGroup
            title="Education"
            records={this.state.profile.educations}
          />
          <CardGroup title="Project" records={this.state.profile.projects} />
          <Skills records={this.state.profile.skills} />
        </Container>
      </div>
    );
  }
}

export default Profile;

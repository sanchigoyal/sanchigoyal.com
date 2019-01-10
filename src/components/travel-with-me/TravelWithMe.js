import React, { Component } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import TimelineEvent from "./timeline-event/TimelineEvent";
import InstagramPost from "./instagram-post/InstagramPost";
import UnderConstruction from "../under-construction/UnderConstruction";

class TravelWithMe extends Component {
  constructor() {
    super();
    this.state = {
      instagram: {
        user: {},
        data: []
      }
    };
  }

  componentDidMount() {
    let profileId = "sanchi-goyal";
    let profileUrl =
      "https://s3-us-west-1.amazonaws.com/sanchigoyal.com/resources/profiles/" +
      profileId +
      "/instagram.json";

    axios
      .get(profileUrl, {
        headers: {
          Accept: "application/json"
        },
        mode: "cors",
        cache: "no-cache"
      })
      .then(response => {
        const instagram = {
          ...response.data
        };
        this.setState({ instagram });
      });
  }

  render() {
    console.log(this.state.instagram);
    const timelineEvents = this.state.instagram.data.map((record, index) => {
      console.log(record);
      return (
        <TimelineEvent
          key={index}
          iconType="fas"
          icon="exclamation-triangle"
          color="success"
        >
          <InstagramPost 
            user={this.state.instagram.user.username}
            profile_picture={this.state.instagram.user.profile_picture}
            url={record.images.url} 
            caption={record.caption.text}
            likes={record.likes.count}
            link={record.link}
            location={record.location.name}/>
        </TimelineEvent>
      );
    });
    return (
      <Container>
        <UnderConstruction></UnderConstruction>
      </Container>
    );
  }
}

export default TravelWithMe;

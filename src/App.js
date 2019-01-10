import React, { Component } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import SgLayout from "./components/sg-layout/SgLayout";
import Profile from "./components/profile/Profile";
import TravelWithMe from "./components/travel-with-me/TravelWithMe";
import CodeWithMe from "./components/code-with-me/CodeWithMe";
import CourseContent from "./components/code-with-me/course-content/CourseContent"
import { Route, Switch } from "react-router-dom";

// this makes font-awesome icons available globally
library.add(fab);
library.add(fas);
library.add(far);

class App extends Component {
  render() {
    return (
      <div className="App">
        <SgLayout>
          <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/travel-with-me" component={TravelWithMe} />
            <Route path="/code-with-me" exact component={CodeWithMe} />
            <Route path="/code-with-me/:project" component={CourseContent} />
          </Switch>
        </SgLayout>
      </div>
    );
  }
}

export default App;

import React from "react";
import { Input, InputGroup} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";

const searchBar = (props) => {
  return (
    <div className="search-bar">
      <InputGroup>
        <div className="input-group-prepend">
          <span className="input-group-text">
            <FontAwesomeIcon icon={["fas", "search"]} />
          </span>
        </div>
        <Input placeholder="Search topics or keywords" onChange={props.change}/>
      </InputGroup>
    </div>
  );
};

export default searchBar;

import React from "react";
import "./Timeline.css";

const modifyChildren = (child, index) => {
  // do only for even elements
  if (index % 2) {
    const props = {
      ...child.props,
      className: "timeline-inverted",
      key: index
    };
    return React.cloneElement(child, props);
  }

  const props = {
    ...child.props,
    key: index
  };
  return React.cloneElement(child, props);
};

const timeline = props => {
  return (
    <ul className="timeline">
      {props.children.map((child, index) => modifyChildren(child, index))}
    </ul>
  );
};

export default timeline;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TimelineEvent.css";

const timelineEvent = props => {
  let badgeStyle = {
    backgroundColor: getBadgeColorCode(props.color)
  };

  let datetime;
  if (props.datetime) {
    datetime = (
      <p>
        <small className="text-muted">
          <FontAwesomeIcon icon={["far", "clock"]} /> {props.datetime}
        </small>
      </p>
    );
  }

  return (
    <li className={props.className}>
      <div className="timeline-badge" style={badgeStyle}>
        <FontAwesomeIcon icon={[props.iconType, props.icon]} />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">{props.title}</h4>
          {datetime}
        </div>
        <div className="timeline-body">{props.children}</div>
      </div>
    </li>
  );
};

const getBadgeColorCode = color => {
  switch (color) {
    case "primary":
      return "#2e6da4";
    case "success":
      return "#3f903f";
    case "warning":
      return "#f0ad4e";
    case "danger":
      return "#d9534f";
    case "info":
      return "#5bc0de";
    default:
      return "#999999";
  }
};

export default timelineEvent;

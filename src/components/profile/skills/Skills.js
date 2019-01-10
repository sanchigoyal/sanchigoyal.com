import React from "react";
import { Table } from "reactstrap";
import Card from "../card/Card";
import "./Skills.css";

const skills = props => {
  const title = "Skills";
  const cardBody = (
    <Table borderless size="sm">
      <tbody>
        {props.records.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((col, j) => {
                return <td key={j}>{col}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );

  return (
    <div className="skills-container">
      <h3>{title}</h3>
      <div className="skills shadow">
        <Card>{cardBody}</Card>
      </div>
    </div>
  );
};

export default skills;

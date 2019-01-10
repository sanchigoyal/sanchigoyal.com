import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const underConstruction = () => {
  return (
    <div className="text-center">
      <br />
      <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} size="4x" />
      <h2 className="text-center">Page Under Construction</h2>
    </div>
  );
};

export default underConstruction;

import React from "react";
import SgHeader from "../sg-header/SgHeader";
import SgFooter from "../sg-footer/SgFooter";
import SgBody from "../sg-body/SgBody";

const sgLayout = props => {
  return (
    <div>
      <SgHeader />
      <SgBody>{props.children}</SgBody>
      <SgFooter />
    </div>
  );
};

export default sgLayout;

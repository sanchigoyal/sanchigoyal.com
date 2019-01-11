import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SgHeader.css";

export default class SgHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header className="fixed-top">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <strong>Sanchi Goyal</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/travel-with-me">
                  <FontAwesomeIcon icon={["fas", "plane-departure"]} /> Travel
                  With Me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/code-with-me">
                  <FontAwesomeIcon icon={["fas", "code"]} /> Code With Me
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <span className="text-only">
                Powered by <FontAwesomeIcon icon={["fab", "react"]} />
              </span>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

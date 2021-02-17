import React from 'react';
import { Link } from 'react-router';
import { NavbarToggler, Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import DocSearch from './DocSearch';

export default class UINav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      showNavbar: false
    };
  }
  toggleNavbar(e) {
    e.preventDefault();
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  }
  render() {
    return (
        <Navbar className="header" color="faded" light expand="md" style={{ marginTop: "100px" }}>
          <Container>
            <NavbarBrand className="me-auto" tag={Link} to="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse navbar isOpen={this.state.showNavbar}>
              <Nav navbar className="ms-sm-auto">
                <NavItem>
                  <DocSearch />
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/components/" activeClassName="active">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/utilities/" activeClassName="active">Utilities</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="font-weight-bold" tag={Link} to="/premium-themes/" activeClassName="active">Premium Themes</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
    );
  }
}

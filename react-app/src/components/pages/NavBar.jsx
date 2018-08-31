// @flow

import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import * as MenuItem from 'react-bootstrap/lib/MenuItem';
import * as Nav from 'react-bootstrap/lib/Nav';
import * as NavDropdown from 'react-bootstrap/lib/NavDropdown';
import * as NavItem from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import HelloApp from '../hello/App';
import HelloLambdaApp from '../hello_lambda/App';
import About from './About';
import Home from './Home';
import Topics from './Topics';
import AppForm from './Form';
import AppModal from './Modal';
import NoMatch from './NoMatch';

const NavBar = () => (
  <Router>
    <div className="App container">
      <Navbar fluid collapseOnSelect inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">React Hands-on</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={4} title="Application" id="basic-nav-dropdown">
              <LinkContainer to="/hello">
                <MenuItem eventKey={4.1}>Hello</MenuItem>
              </LinkContainer>
              <LinkContainer to="/hello_lambda">
                <MenuItem eventKey={4.1}>HelloLambda</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/topics">
              <NavItem>Topics</NavItem>
            </LinkContainer>
            <LinkContainer to="/form">
              <NavItem>Form</NavItem>
            </LinkContainer>
            <LinkContainer to="/modal">
              <NavItem>Modal</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/form" component={AppForm} />
        <Route path="/modal" component={AppModal} />
        <Route path="/hello" component={HelloApp} />
        <Route path="/hello_lambda" component={HelloLambdaApp} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);
export default NavBar;
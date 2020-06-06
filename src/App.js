import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Styled from 'styled-components'
import ServiceOrdersCreate from './containers/ServiceOrdersCreate'
import ServiceOrdersUpdate from "./containers/ServiceOrdersUpdate";

const Nav = Styled.div`
  background: #5c5c5c;
  display: flex;
  margin: 0;
  padding: 1.5em;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
`;

const LinkStyl = Styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 0.5em;
  transition: 0.3s;
  font-size: 1.2em;
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

function App() {
  return (
    <Router>
      <Nav>
        <li>
          <LinkStyl to="/create">Create Service Orders</LinkStyl>
        </li>
        <li>
          <LinkStyl to="/update">Update Service Orders</LinkStyl>
        </li>
      </Nav>
      <Switch>
        <Route path="/create">
          <ServiceOrdersCreate />
        </Route>
        <Route path="/update">
          <ServiceOrdersUpdate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

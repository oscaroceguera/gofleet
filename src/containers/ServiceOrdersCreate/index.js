import React from 'react'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Styled from 'styled-components'


import General from './general'
import Tasks from './tasks'

const Nav = Styled.div`
  text-align: center;
  padding: 1em;
`;

const LinkOpt = Styled(Link)`
  font-size: 1.2em;
  background: ${(props) => (props.active ? "#3498db" : "#2c3e50")};
  padding: .5em 1em;
  margin: 1em;
  border-radius: 4px;
  color: white;
  text-decoration: none;
`;

function LinkActive({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <LinkOpt to={to} active={match ? "active": ""}>
      {label}
    </LinkOpt>
  );
}

const ServiceOrdersCreate = () => {
  const { path, url } = useRouteMatch();;

   console.log("ServiceOrdersCreate -> url", url);
   console.log("ServiceOrdersCreate -> path", path);

  return (
    <>
      <Nav>
        <LinkActive
          to={`${url}/general`}
          label={"General"}
          activeOnlyWhenExact
        />
        <LinkActive to={`${url}/tasks`} label={"Tasks"} activeOnlyWhenExact />
      </Nav>
      <Switch>
        <Route exact path={path}>
          <h3 style={{ textAlign: "center" }}>Please select a option.</h3>
        </Route>
        <Route path={`${path}/general`}>
          <General />
        </Route>
        <Route path={`${path}/tasks`}>
          <Tasks />
        </Route>
      </Switch>
    </>
  );
}

export default ServiceOrdersCreate
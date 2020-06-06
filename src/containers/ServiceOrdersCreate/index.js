import React from 'react'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";


import General from './general'
import Tasks from './tasks'

const ServiceOrdersCreate = () => {
  let { path, url } = useRouteMatch();
  console.log("ServiceOrdersCreate -> url", url)
  console.log("ServiceOrdersCreate -> path", path)

  return (
    <>
      <h1>Service Orders Create</h1>
      <ul>
        <li>
          <Link to={`${url}/general`}>General</Link>
        </li>
        <li>
          <Link to={`${url}/tasks`}>Tasks</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a option.</h3>
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
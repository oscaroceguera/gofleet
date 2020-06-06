import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ServiceOrdersCreate from './containers/ServiceOrdersCreate'
import ServiceOrdersUpdate from "./containers/ServiceOrdersUpdate";

function App() {
  return (
    <Router>
      <div style={{ border: "1px solid red" }}>
        <ul>
          <li>
            <Link to="/create">Service Orders Create</Link>
          </li>
          <li>
            <Link to="/update">Service Orders Update</Link>
          </li>
        </ul>
        <Switch>
          <Route  path="/create">
            <ServiceOrdersCreate />
          </Route>
          <Route  path="/update">
            <ServiceOrdersUpdate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

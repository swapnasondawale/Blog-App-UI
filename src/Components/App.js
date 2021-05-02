import React from 'react';
import './App.css';
import HomeComponent from './HomeComponent/HomeComponent';
import Content from './Content/Content'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <HomeComponent/>
            </Route>
            <Route exact path="/homepage">
              <HomeComponent />
            </Route>
            <Route exact path="/content">
              <Content />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

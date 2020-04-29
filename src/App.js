import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import navbar from './components/navbar';
import trivia  from './components/trivia';
import home from './components/home';
import side from './components/side';
import main from './components/main';
import re1 from './components/main/re1';


function App() {
  return (
    <React.Fragment>
    hiiiii
     <Router>
        {/* <NavigationBar /> */}

        

        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/main" component={main} />
          <Route path="/side" component={side} />
          <Route path="/trivia" component={trivia} />
          <Route path="/re1" component={re1} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
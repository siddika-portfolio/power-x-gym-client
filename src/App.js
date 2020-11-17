import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdvanceGym from './component/AdvanceGym/AdvanceGym';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/advance">
            <AdvanceGym></AdvanceGym>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

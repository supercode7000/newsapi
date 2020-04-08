import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Test from './Test';

function App() {
  return (
    <div className="App">
      News Api
      <nav>
        <Link to="/">Deutsch </Link>
        <Link to="/french"> Français</Link>
        <Link to="/english">English</Link>
        <Link to="/ukranien">Ukranien</Link>
      </nav>
      <Switch>
        <Route Path='/' exact>
          <Test />
        </Route>
        <Route Path='/french'>
          <Test />
        </Route>
        <Route Path='/english'>
          <Test />
        </Route>
        <Route Path='/ukranien'>
          <Test />
        </Route>
      </Switch>
    </div>

  );
}

export default App;

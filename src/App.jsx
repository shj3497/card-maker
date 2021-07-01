import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './App.module.css'

const App = ({authService}) => {

  return(
    <Router>
      <Switch>
        <Route path="/maker">
          <Maker authService={authService} />
        </Route>
        <Route exact path="/">
          <Login authService={authService} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
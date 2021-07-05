import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';

const App = ({FileInput, authService, cardRepository}) => {

  return(
    <Router>
      <Switch>
        <Route path="/maker">
          <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository} />
        </Route>
        <Route exact path="/">
          <Login authService={authService} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
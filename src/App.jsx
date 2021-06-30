import React from 'react';
import Login from './components/login/login';
import styles from './App.module.css'

const App = ({authService}) => {

  return(
    <div>
      <Login authService={authService} />
    </div>
  )
}

export default App;
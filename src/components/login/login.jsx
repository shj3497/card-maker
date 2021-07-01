import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css'

const Login = ({authService}) => {

  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: {
        id: userId
      }
    })
  }

  const onLogin = (event) => {  
    // console.log(event.currentTarget.textContent);
    authService //
      .login(event.currentTarget.textContent)
      .then((result) => {
        console.log(result);
        goToMaker(result.user.uid);
      });
  }  

  useEffect(() => {
    authService
      .onAuthChange((user) => {
        if(user){
          goToMaker(user.uid);
        }else{
        }
      })
  })

  return(
    <section className={styles.container}>
      <Header loginChk={false} display={'small'} />
      <section className={styles.loginSection}>
        <h1>LOGIN</h1>
        <ul>
          <li><button className={styles.button} onClick={onLogin}>Google</button></li>
          <li><button className={styles.button} onClick={onLogin}>Github</button></li>
        </ul>
      </section>
      <Footer display={'small'}  />
    </section>
  )
}

export default Login;
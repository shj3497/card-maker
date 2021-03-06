import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css'

const Login = ({authService}) => {

  const [userInfo, setUserInfo] = useState([]);
  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: {
        id: userId,
      }
    })
  }

  const onLogin = (event) => {  
    // console.log(event.currentTarget.textContent);
    authService //
      .login(event.currentTarget.textContent)
      .then((result) => {
        setUserInfo(result.user);
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
      <Header loginChk={false} display={'small'} userInfo={userInfo} />
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
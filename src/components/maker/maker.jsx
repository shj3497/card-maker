import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';
import styles from './maker.module.css';

const Maker = ({authService}) => {

  const history = useHistory();
  const onLogout = () => {
    console.log('logout')
    authService.logout()
  }

  useEffect(() => {
    authService
      .onAuthChange(user => {
        if(!user){
          history.push('/');
        }
      })
  })

  return(
    <section className={styles.container}>
      <Header onLogout={onLogout} loginChk={true} display={'full'} />
      <Footer displayType={'full'}/>
    </section>
  )
}

export default Maker;
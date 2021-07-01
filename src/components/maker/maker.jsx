import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Footer from '../footer/footer';
import CardMakerList from '../card_maker_list/card_maker_list';
import CardPreivewList from '../card_preview_list/card_preivew_list';
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
    <section className={styles.section}>
      <Header onLogout={onLogout} loginChk={true} display={'full'} />
      <div className={styles.container}>
        <CardMakerList />
        <CardPreivewList />
      </div>
      <Footer displayType={'full'}/>
    </section>
  )
}

export default Maker;
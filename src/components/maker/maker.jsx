import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Footer from '../footer/footer';
import CardMakerList from '../card_maker_list/card_maker_list';
import CardPreivewList from '../card_preview_list/card_preivew_list';
import styles from './maker.module.css';

const Maker = ({authService}) => {

  const [userInfo, setUserInfo] = useState([
    {
      key: '2021-07-01',
      name: 'shimhyoekjin',
      img: 'https://res.cloudinary.com/hyeokjin/image/upload/v1625128268/%EC%A6%9D%EB%AA%851_bptcio.jpg',
      company: '펜타클',
      job: 'Software Engineer',
      email: 'shj3497@gmail.com',
      text: `I'm aimming a full stack developer`
    }

  ]);

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
        <CardMakerList userInfos={userInfo}/>
        <CardPreivewList userInfos={userInfo} />
      </div>
      <Footer displayType={'full'}/>
    </section>
  )
}

export default Maker;
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import Footer from '../footer/footer';
import CardMakerList from '../card_maker_list/card_maker_list';
import CardPreivewList from '../card_preview_list/card_preivew_list';
import styles from './maker.module.css';

const Maker = ({authService}) => {

  const [userInfos, setUserInfos] = useState([
    {
      id: '2021-07-01',
      name: 'shimhyoekjin',
      fileName: 'hyeokjin',
      fileURL: 'https://res.cloudinary.com/hyeokjin/image/upload/v1625128268/%EC%A6%9D%EB%AA%851_bptcio.jpg',
      company: '펜타클',
      position: 'Software Engineer',
      mobile: '010-1234-5678',
      email: 'shj3497@gmail.com',
      address: `I'm aimming a full stack developer`,
      theme: 'Dark'
    },
    {
      id: '2021-07-02',
      name: 'shimhyoekjin',
      fileName: 'hyeokjin',
      fileURL: null,
      company: '펜타클',
      position: 'Software Engineer',
      mobile: '010-1234-5678',
      email: 'shj3497@gmail.com',
      address: `I'm aimming a full stack developer`,
      theme: 'Light'
    },
    {
      id: '2021-07-03',
      name: 'shimhyoekjin',
      fileName: 'hyeokjin',
      fileURL: 'https://res.cloudinary.com/hyeokjin/image/upload/v1625128268/%EC%A6%9D%EB%AA%851_bptcio.jpg',
      company: '펜타클',
      position: 'Software Engineer',
      mobile: '010-1234-5678',
      email: 'shj3497@gmail.com',
      address: `I'm aimming a full stack developer`,
      theme: 'Colorful'
    },
    {
      id: '2021-07-04',
      name: 'shimhyoekjin',
      fileName: 'hyeokjin',
      fileURL: 'https://res.cloudinary.com/hyeokjin/image/upload/v1625128268/%EC%A6%9D%EB%AA%851_bptcio.jpg',
      company: '펜타클',
      position: 'Software Engineer',
      mobile: '010-1234-5678',
      email: 'shj3497@gmail.com',
      address: `I'm aimming a full stack developer`,
      theme: 'Colorful'
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    console.log('logout')
    authService.logout()
  }

  const addCard = (card) => {
    const updated = [...userInfos, card];
    setUserInfos(updated);
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
        <CardMakerList userInfos={userInfos} addCard={addCard}/>
        <CardPreivewList userInfos={userInfos} />
      </div>
      {/* <Footer displayType={'full'}/> */}
    </section>
  )
}

export default Maker;
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import CardMakerList from '../card_maker_list/card_maker_list';
import CardPreivewList from '../card_preview_list/card_preivew_list';
import styles from './maker.module.css';

const Maker = ({FileInput, authService, cardRepository}) => {

  const history = useHistory();
  const historyState = history.location.state;
  const [userInfos, setUserInfos] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService.logout()
  }

  const createOrUpdateCard = (card) => {
    // const updated = {...userInfos};
    // updated[card.id] = card;
    // setUserInfos(updated);
    //! 콜백함수로도 사용이 가능하다. 
    setUserInfos(userInfos => {
      const updated = { ...userInfos };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  }

  const deleteCard = (card) => {
    setUserInfos(userInfos => {
      const updated = {...userInfos};
      delete updated[card.id];
      return updated;
    })
    cardRepository.removeCard(userId, card);
  }


  useEffect(() => {
    if(!userId){
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setUserInfos(cards);
    })
    
    return () => stopSync();

  }, [userId, cardRepository])

  useEffect(() => {
    authService
      .onAuthChange(user => {
        if(user){
          setUserId(user.uid);
        }else{
          history.push('/');
        }
      })
  }, [authService, history])

  return(
    <section className={styles.section}>
      <Header onLogout={onLogout} loginChk={true} display={'full'} />
      <div className={styles.container}>
        <CardMakerList 
          FileInput={FileInput}
          userInfos={userInfos} 
          addCard={createOrUpdateCard} 
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard} 
        />
        <CardPreivewList userInfos={userInfos} />
      </div>
      {/* <Footer displayType={'full'}/> */}
    </section>
  )
}

export default Maker;
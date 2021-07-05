import React, { useState, useEffect, useCallback } from 'react';
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

  // 함수가 계속 호출이 되어도(props)가 바뀌더라도 동일한 데이터를 쓴다. useCallback
  // 만약 authService라는 props가 변경이 되면 그때 이 함수를 실행한다.
  const onLogout = useCallback(() => {
    authService.logout()
  }, [authService])

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
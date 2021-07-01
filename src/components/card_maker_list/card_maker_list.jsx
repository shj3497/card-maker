import React from 'react';
import CardMaker from '../card_maker/card_maker';
import styles from './card_maker_list.module.css'

const CardMakerList = ({userInfos}) => {

  return(
    <div className={styles.container}>
      <h1>Card Maker</h1>
      <ul>
        {
          userInfos.map(userInfo => <CardMaker key={userInfo.key} userInfo={userInfo} />)
        }
      </ul>
    </div>
  )
}

export default CardMakerList;
import React from 'react';
import CardMaker from '../card_maker/card_maker';
import CardMakerAdd from '../card_maker_add/card_maker_add';
import styles from './card_maker_list.module.css'

const CardMakerList = ({FileInput, userInfos, addCard, updateCard, deleteCard}) => {

  return(
    <div className={styles.container}>
      <h1>Card Maker</h1>
      <ul className={styles.list}>
        {
          Object.keys(userInfos).map(key =>
            <CardMaker 
              key={key} 
              FileInput={FileInput}
              userInfo={userInfos[key]}
              updateCard={updateCard}
              deleteCard={deleteCard}
            />)
        }
        <CardMakerAdd FileInput={FileInput} onAdd={addCard} />
      </ul>
    </div>
  )
}

export default CardMakerList;
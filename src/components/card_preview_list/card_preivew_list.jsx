import React from 'react';
import CardPreview from '../card_preivew/card_preview';
import styles from './card_preview_list.module.css'

const CardPreivewList = ({userInfos}) => {
  return(
    <div className={styles.container}>
      <h1>Card Preview</h1>
      <ul className={styles.list}>
        {
          userInfos.map(userInfo => <CardPreview userInfo={userInfo} />)
        }
      </ul>
    </div>
  )
}

export default CardPreivewList;
import React from 'react';
import styles from './card_preview.module.css'

const CardPreview = ({userInfo}) => {

  return(
    <li className={styles.container}>
      <div className={styles.user__container}>
        <div className={styles.imgbox}>
          <img src={userInfo.img} alt="" />
        </div>
        <div className={styles.textbox}>
          <h2>{userInfo.name}</h2>
          <h3>{userInfo.company}</h3>
          <span></span>
          <p>{userInfo.job}</p>
          <p>{userInfo.email}</p>
          <p>{userInfo.text}</p>
        </div>
      </div>
    </li>
  )
}

export default CardPreview;
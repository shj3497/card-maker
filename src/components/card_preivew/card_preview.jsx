import React from 'react';
import styles from './card_preview.module.css'

const DEFAULT_IMAGE = '/img/default_img.png';
const CardPreview = ({userInfo}) => {

  const url = userInfo.fileURL || DEFAULT_IMAGE;
  const getStyles = (theme) => {
    switch(theme){
      case 'Dark':
        return styles.dark;
      case 'Light':
        return styles.light;
      case 'Colorful':
        return styles.colorful;
      default:
        throw new Error(`Unknown theme: ${theme}`);
    }
  }

  return(
    <li className={styles.container}>
      <div className={`${styles.user__container} ${getStyles(userInfo.theme)}`}>
        <div className={styles.imgbox}>
          <img src={url} alt="profile_photo" />
        </div>
        <div className={`${styles.textbox} ${getStyles(userInfo.theme)}`}>
          <h2>{userInfo.name}</h2>
          <h3>{userInfo.company}</h3>
          <span></span>
          <p>{userInfo.position}</p>
          <p>{userInfo.mobile}</p>
          <p>{userInfo.email}</p>
          <p>{userInfo.address}</p>
        </div>
      </div>
    </li>
  )
}

export default CardPreview;
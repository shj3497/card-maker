import React from 'react';
import styles from './header.module.css'

const Header = ({loginChk, onLogout, display}) => {

  const displayType = display === 'small' ? styles.small : styles.full;

  return(
    <section className={`${styles.container} ${displayType}`}>
      <h1>Business Card Maker</h1>
      {
        loginChk ? (
          <button className={styles.logout} onClick={()=>{onLogout()}} >
            <span><i class="fas fa-sign-out-alt"></i>Sign out</span>
          </button>
        ) :
        (
          <span></span>
        )
      }
    </section>
  )
}

export default Header;
import React, { memo } from 'react';
import styles from './header.module.css'

const Header = memo(({loginChk, onLogout, display}) => {

  const displayType = display === 'small' ? styles.small : styles.full;
  
  return(
    <section className={`${styles.container} ${displayType}`}>
      <h1>Business Card Maker</h1>
      {
        loginChk && (
          <div className={styles.userInfoContainer}>
            <button className={styles.logout} onClick={()=>{onLogout()}} >
              <span>Logout<i className="fas fa-sign-out-alt"></i></span>
            </button>
          </div>
        )
      }
    </section>
  )
})

export default Header;
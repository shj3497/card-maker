import React from 'react';
import styles from './footer.module.css'
const Footer = ({display}) => {

  const displayType = display === 'small' ? styles.small : styles.full;

  return(
    <section className={`${styles.container} ${displayType}`}>
      <h1>Code Your Dream</h1>
    </section>
  )
}

export default Footer;
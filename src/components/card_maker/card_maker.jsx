import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_maker.module.css'

const CardMaker = ({userInfo}) => {

  const onSubmit = () => {

  }

  return(
    <li className={styles.container}>
      <div className={styles.user__container}>
        <form>
          <div className={styles.col_1}>
            <input type="text" name="name" value={userInfo.name} />
            <input type="text" name="company" value={userInfo.company} />
            <select name="theme" value={userInfo.theme}>
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
              <option value="Colorful">Colorful</option>
            </select>
          </div>
          <div className={styles.col_2}>
            <input type="text" name="position" value={userInfo.position} />
            <input type="text" name="email" value={userInfo.email} />
          </div>
          <div className={styles.col_3}>
            <input type="text" name="mobile" value={userInfo.mobile} />
            <input type="text" name="address" value={userInfo.address} />
          </div>
          <div className={styles.col_4}>
            <ImageFileInput />
            <Button name='Delete' onClick={onSubmit} />
          </div>
        
        </form>
      </div>
    </li>
  )
}

export default CardMaker;
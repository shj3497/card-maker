import React from 'react';
import Button from '../button/button';
import styles from './card_maker.module.css'

const CardMaker = ({FileInput, userInfo, updateCard, deleteCard}) => {

  const onSubmit = () => {
    deleteCard(userInfo);
  }

  const onChange = (event) => {
    if(event.currentTarget == null){
      return;
    }
    event.preventDefault();
    updateCard({
      ...userInfo,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onFileChange = (file) => {
    updateCard({
      ...userInfo,
      fileName: file.name,
      fileURL: file.url
    })
  }

  return(
    <li className={styles.container}>
      <div className={styles.user__container}>
        <form>
          <div className={styles.col_1}>
            <input type="text" name="name" value={userInfo.name} onChange={onChange} />
            <input type="text" name="company" value={userInfo.company} onChange={onChange} />
            <select name="theme" value={userInfo.theme} onChange={onChange} >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
              <option value="Colorful">Colorful</option>
            </select>
          </div>
          <div className={styles.col_2}>
            <input type="text" name="position" value={userInfo.position} onChange={onChange} />
            <input type="text" name="email" value={userInfo.email} onChange={onChange} />
          </div>
          <div className={styles.col_3}>
            <input type="text" name="mobile" value={userInfo.mobile} onChange={onChange} />
            <input type="text" name="address" value={userInfo.address} onChange={onChange} />
          </div>
          <div className={styles.col_4}>
            <FileInput name={userInfo.fileName} onFileChange={onFileChange} />
            <Button name='Delete' onClick={onSubmit} />
          </div>
        
        </form>
      </div>
    </li>
  )
}

export default CardMaker;
import React, { useState, useRef } from 'react';
import Button from '../button/button';
import styles from './card_maker_add.module.css'

const CardMakerAdd = ({FileInput, onAdd}) => {

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const addressRef = useRef();
  const [file, setFile] = useState({fileName: null, fileURL:null});

  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      position: positionRef.current.value || '',
      email: emailRef.current.value || '',
      mobile: mobileRef.current.value || '',
      address: addressRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };

    formRef.current.reset();
    setFile({fileName: null, fileURL:null});
    onAdd(card)
  }

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url
    });
  }

  return(
    <li className={styles.container}>
      <div className={styles.user__container}>
        <form ref={formRef}>
          <div className={styles.col_1}>
            <input ref={nameRef} type="text" name="name" placeholder="Name" />
            <input ref={companyRef} type="text" name="company" placeholder="Company" />
            <select ref={themeRef} name="theme">
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
              <option value="Colorful">Colorful</option>
            </select>
          </div>
          <div className={styles.col_2}>
            <input ref={positionRef} type="text" name="position" placeholder="Position" />
            <input ref={emailRef} type="text" name="email" placeholder="Email" />
          </div>
          <div className={styles.col_3}>
            <input ref={mobileRef} type="text" name="mobile" placeholder="Moblie" />
            <input ref={addressRef} type="text" name="address" placeholder="Address" />
          </div>
          <div className={styles.col_4}>
            <FileInput name={file.fileName} onFileChange={onFileChange} />
            <Button name='Add' onClick={onSubmit} />
          </div>
        
        </form>
      </div>
    </li>
  )
}

export default CardMakerAdd;
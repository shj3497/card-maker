import React, { useState, useRef, memo } from 'react';
import styles from './image_file_input.module.css'

const ImageFileInput = memo(({imageUploader, name, onFileChange}) => {

  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onBtnClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url
    })
    
  }

  return(
    <div className={styles.container}>
      <input 
        ref={inputRef}
        type="file" 
        accept="image/*" 
        name="file" 
        className={styles.input}
        onChange={onChange}
      />
      {
        !loading && (
          <button className={`${styles.imgUploader} ${name ? styles.pink : styles.gray }`} onClick={onBtnClick}>
            {name || 'No File'}
          </button>
        )
      }
      {
        loading && (<div className={styles.loading}><span></span></div>)
      }
    </div>
  )
})

export default ImageFileInput;
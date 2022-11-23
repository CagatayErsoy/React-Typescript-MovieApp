import React from 'react'
import styles from './searchBar.module.css'


const searchBar = (props:any) => {
    
    
  return (
    <div className={styles.input}>
      <input 
      className={styles.inputBox}
      type="text" 
      placeholder="Search here"
   onChange={
    (e)=>props.handleChange(e)}
  
   />
  <button className={styles.inputSubmit}></button>
    </div>
  )
}

export default searchBar

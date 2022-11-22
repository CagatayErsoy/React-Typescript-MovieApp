import React from 'react'
import styles from './searchBar.module.css'
interface Props{
  movies:any,
  allMovies:any,
  setMovies:React.Dispatch<React.SetStateAction<any>>
}

const searchBar = ({movies,allMovies,setMovies}:Props) => {
    let searchResult:any=[] 
     const  handleChange=(event:any)=>{
      searchResult=[...allMovies].filter(movie=>{
        return movie.title.toLowerCase().includes(event.target.value)
        })
        setMovies(searchResult)
     }
    
  return (
    <div className={styles.input}>
      <input 
      className={styles.inputBox}
      type="text" 
      placeholder="Search here"
   onChange={
    (e)=>handleChange(e)}
  //  value={searchInput} 
   />
  <button className={styles.inputSubmit}></button>
    </div>
  )
}

export default searchBar

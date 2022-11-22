import React from 'react'
import Movies from '../../interfaces/Movies'

type Props={
allMovies:Movies[]
getGenre:any
}
const dropdown = (props:Props) => {
    const genreList = () => {

        let temp = props.allMovies.map(movie => {
          return movie.genres
        }).flat()
        return temp.filter((c, index) => {
          let temp2=temp.indexOf(c) === index;
          return temp2
    
        })
      }
      const options=()=>{
        return genreList().map( item=> <option key={item}>{item}</option>)
      }
      const handleChange=(e:any)=>{
        props.getGenre(e.target.value)
      }

      
  return (
    <select onChange={handleChange}>
        <option value="All" key="All">All</option>
        {options()}
    </select>
  )
}

export default dropdown
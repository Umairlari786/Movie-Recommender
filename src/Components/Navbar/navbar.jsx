import React from 'react'
import "./Navbar.css"
import icons from "../../assets/searchIcon.png";
const navbar = () => {


  return (
    <div className='navbar'>
        <h1 className='logo'>CINEMAHUB</h1>
          <ol className='nav-list'>
                 <li>Home</li>
                 <li>Tv Shows</li>
                 <li>Movies</li>
                 <li>Latest</li>
                <li>My Latest</li>
         </ol>

        <input className='search-bar'
            type="text"
         placeholder="Search..."    />

        <img className='search-btn' src={icons} alt='#'></img>
    </div>
  )
}

export default navbar


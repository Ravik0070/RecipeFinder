import React, { useState, useContext } from 'react'
import SideBar from '../component/SideBar'
import Banner from '../component/Banner'
import RecepieList from '../component/RecepieList'
import SingleRecepie from '../component/SingleRecepie'
import { ContextAPI } from '../context/ContextApi'

const Home = () => {
    const [showSideBar, setShowSideBar] = useState(true);
    const context = useContext(ContextAPI);
    const isList = context.isList;
    const [searchValue, setSearchValue] = useState("");
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    };
    const handleClick = () => {
        context.setSearchText(searchValue);
    }
    return (
        <div className="parent">
            <div className={`hamburger animate__animated animate__heartBeat animate__infinite	 ${showSideBar ? `active` : ""}`}  >
                <i className="fa-solid fa-burger" onClick={() => { setShowSideBar(!showSideBar) }}></i>
            </div>
            <div className="search">
                <input type="text" id='search' placeholder='Search' onKeyPress={handleKeyPress}  onChange={(e) => setSearchValue(e.target.value)} />
                <i className="fa-solid fa-magnifying-glass" onClick={handleClick}></i>
            </div>
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="banner">
                <Banner />
            </div>
            <div className="container">
                {isList === true ?
                    <RecepieList /> :
                    <SingleRecepie />
                }

            </div>
        </div>
    )
}

export default Home

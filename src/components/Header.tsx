import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import "./header.css";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const theme = useContext(ThemeContext);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <header className='header'>
            <div className='h-container'>
                <div className='logo'>NFT Marketplace</div>
                <div className='search-wrap'>
                    <input
                        type='text'
                        placeholder='Search...'
                        className='search-input'
                    />
                </div>
                <nav className='des-menu'>
                    <a href="#" className='menu-item'>Explore</a>
                    <a href="#" className='menu-item'>Staking</a>
                    <a href="#" className='menu-item'>Collection</a>
                    <button className='wallet-btn'>
                        Connect
                    </button>
                </nav>


                <button onClick={theme?.toggleTheme} className='theme-btn'>
                    {theme?.theme === 'dark' ? '☀️' : '🌙'}
                </button>
            </div>
        </header>
    )
}

export default Header
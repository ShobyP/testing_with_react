import React from "react";
import './styles.scss'
import logo from './../../graphics/Lineage_OS_Logo.png'

const Header = (props) => {
    return (
        <div>
        <header data-test='headerComponent'>
            <div data-test="wrap">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            Header
        </header>
            <div className="tail">
                https://www.youtube.com/watch?v=tYMLXpOJtng - 35:21
            </div>
        </div>
    )
};

export default Header;
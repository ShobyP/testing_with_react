import React from "react";
import './styles.scss'
import logo from './../../graphics/Lineage_OS_Logo.png'

const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            Header
        </header>
    )
};

export default Header;
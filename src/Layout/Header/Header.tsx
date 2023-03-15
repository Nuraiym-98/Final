import React from 'react';
import {Link} from 'react-router-dom'


import {BiSearchAlt} from 'react-icons/bi'
import {BsBagHeart} from 'react-icons/bs'



export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to='/' className="header__logo">
                        <img src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/02/Слой_38.png?fit=178%2C39&ssl=1" alt=""/>
                    </Link>

                    <div className="header__right">
                        <ul className="header__right-list">
                            <li className="header__right-item">
                                Main
                            </li>

                            <li className="header__right-item">
                               About us
                            </li>

                            <li className="header__right-item">
                                Catalogue
                            </li>

                            <li className="header__right-item">
                                Accessories
                            </li>

                            <li className="header__right-item">
                                Wines origin
                            </li>

                            <li className="header__right-item">
                                Delivery
                            </li>

                            <li className="header__right-item">
                                Articles
                            </li>

                            <li className="header__right-item">
                                Contacts
                            </li>
                        </ul>

                        <ul className="header__right-list">
                            <li className="header__right-search">
                                <BiSearchAlt size={25} fill="white"/>
                            </li>

                            <li className="header__right-search">
                                <BsBagHeart size={25} fill="white"/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};


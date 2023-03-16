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
                            <Link to='/' className="header__right-item">
                                Main
                            </Link>

                            <li className="header__right-item">
                               About us
                                <ul className="header__right-item-pop">
                                    <Link to={"/about"} className="header__right-item-li">
                                        About restaurant
                                    </Link>

                                    <Link to="/store" className="header__right-item-li">
                                        About store
                                    </Link>
                                </ul>
                            </li>

                            <li className="header__right-item">
                                Catalogue

                                <ul className="header__right-item-pop">
                                    <li className="header__right-item-li">
                                        Red wine
                                    </li>

                                    <li className="header__right-item-li">
                                        White wine
                                    </li>

                                    <li className="header__right-item-li">
                                        Rose
                                    </li>

                                    <li className="header__right-item-li">
                                        Champagne
                                    </li>

                                    <li className="header__right-item-li">
                                        Port wine
                                    </li>

                                    <li className="header__right-item-li">
                                        Sets
                                    </li>

                                    <li className="header__right-item-li">
                                        All wines
                                    </li>
                                </ul>
                            </li>

                            <li className="header__right-item">
                                Accessories
                            </li>

                            <li className="header__right-item">
                                Wines origin
                                <ul className="header__right-item-pop">
                                    <li className="header__right-item-li">
                                        French wines
                                    </li>

                                    <li className="header__right-item-li">
                                        Italian wines
                                    </li>

                                    <li className="header__right-item-li">
                                        Portuguese wines
                                    </li>

                                    <li className="header__right-item-li">
                                        Spanish wines
                                    </li>

                                    <li className="header__right-item-li">
                                        German wines
                                    </li>

                                    <li className="header__right-item-li">
                                        South Africa
                                    </li>
                                </ul>
                            </li>

                            <li className="header__right-item">
                                Delivery
                            </li>

                            <li className="header__right-item">
                                Articles
                            </li>

                            <li className="header__right-item">
                                Contacts
                                <ul className="header__right-item-pop">
                                    <li className="header__right-item-li">
                                        +996 (707) 330 105
                                    </li>

                                    <li className="header__right-item-li">
                                        +996 (770) 33 01 07
                                    </li>


                                    <li className="header__right-item-li">
                                        Bishkek, Chui 140a
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <ul className="header__right-list">
                            <li className="header__right-search">
                                <BiSearchAlt size={25} fill="#663333"/>
                            </li>

                            <li className="header__right-search">
                                <BsBagHeart size={25} fill="#663333"/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};


import React from 'react';
import {Link} from 'react-router-dom'
import {BsBagHeart} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/reducers/user";
import {useToast} from "@chakra-ui/react";
import { Avatar } from '@chakra-ui/react'

export const Header = () => {

    const toast = useToast()

    const dispatch = useDispatch()

    const user: any = useSelector<any>(store => store.user)


    const exit = () => {
        dispatch(logout(''))
        localStorage.removeItem('user')
        toast({
            title: 'Success',
            description: "You left acc",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top-left',
        })
    }

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

                            <Link to="/catalog" className="header__right-item">
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
                            </Link>

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

                            <Link to='/delivery' className="header__right-item">
                                Delivery
                            </Link>

                            <Link to="/articles" className="header__right-item">
                                Articles
                            </Link>

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


                            <li className="header__right-item" style={{textDecoration: 'none'}}>
                                <Avatar name={`${user.user.surname} ${user.user.name}`} />

                                <ul className="header__right-item-pop" style={{transform: "translate(-200px,15px)", rowGap: '10px'}}>

                                    <li className="header__right-item-li-ava">
                                        <span className="header__right-item-li-icon">
                                            <BsBagHeart size={25} fill="#663333" style={{transform: "translateY(-2px)"}}/>
                                        </span>
                                        Basket
                                        <span className="header__right-item-li-ava-right">1</span>
                                    </li>

                                    <li className="header__right-item-li-ava" onClick={exit}>
                                        <span className="header__right-item-li-icon">
                                        <BiLogOut size={25} fill="#663333"
                                                  style={{
                                                      transform: "rotate(180deg) translateX(-3px)",}}/>
                                        </span>
                                        logout
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};


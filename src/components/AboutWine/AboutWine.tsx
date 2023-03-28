import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useAboutWinesQuery} from "../../redux/reducers/wines";
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
import { Avatar} from '@chakra-ui/react'

import {ImEarth} from "react-icons/im";
import {BsCalendar2Plus} from "react-icons/bs";
import {SlChemistry} from "react-icons/sl";
import {TbColorFilter} from "react-icons/tb";
import {FaPercentage} from "react-icons/fa";
import {GiWaterDrop} from "react-icons/gi";
import {FaCity} from "react-icons/fa";
import {GiGrapes} from "react-icons/gi";
import {FaStar} from "react-icons/fa";
import {AiOutlineDoubleRight} from "react-icons/ai";
import {winesType} from "../../models/models";
import axios from "../../utils/axios";


export const AboutWine = () => {

    const {id} = useParams()

    const {data} : any = useAboutWinesQuery(Number(id) || null)

    const [text,setText] = useState('')

    const submitView = (e: any) => {
        e.preventDefault()
        let someText = e.target[0].value
        setText('')
    }


    return(
        <section className="detail">
            {
                data?.map((item:winesType) => (
                    <div key={item.id} className="container">

                        <ul className="detail__nav">
                            <Link className="detail__nav-subtitle" to='/'>Main</Link>
                            <Link className="detail__nav-subtitle" to='/'> <AiOutlineDoubleRight fill='black' size={15}/> </Link>
                            <Link className="detail__nav-subtitle" to='/'>{item.category} wine</Link>
                            <Link className="detail__nav-subtitle" to='/'> <AiOutlineDoubleRight fill='black' size={15}/> </Link>
                            <li className="detail__nav-subtitle">{item.name}</li>
                        </ul>

                        <div className="detail__content">

                            <div className="detail__left">
                                <img className="detail__left-img" src={item.image} alt={item.name}/>
                            </div>

                            <div className="detail__right">
                                <h2 className='detail__right-title'>{item.name}</h2>
                                <p className="detail__right-price">{item.price} KGS</p>
                                <ul className="detail__right-info">

                                    <li className="detail__right-about">
                                        <ImEarth fill="#663333" size={35}/>
                                        <span className="detail__right-about-bold">Country:</span>
                                        {item.country}
                                    </li>


                                    <li className="detail__right-about">
                                        <FaCity fill="#663333" size={35}/>
                                        <span className="detail__right-about-bold">Region:</span>
                                        {item.region}
                                    </li>

                                    <li className="detail__right-about">
                                        <SlChemistry fill="#663333" size={35}/>
                                        <span className="detail__right-about-bold">Producer:</span>
                                        {item.producer}
                                    </li>

                                    <li className="detail__right-about">
                                        <TbColorFilter fill="#663333" size={35}/>
                                        <span className="detail__right-about-bold">Category:</span>
                                        {item.category}
                                    </li>

                                    <li className="detail__right-about">
                                        <GiWaterDrop fill="#663333" size={35}/>
                                        <span className="detail__right-about-bold">Moisture:</span>
                                        {item.dry}
                                    </li>

                                    <li className="detail__right-about">
                                        <BsCalendar2Plus fill="#663333" size={35}/>
                                        <span className="detail__right-about-bold">Year:</span>
                                        {item.year}
                                    </li>

                                    <li className="detail__right-about">
                                        <FaPercentage fill="#663333" size={35}/>
                                        <span className="detail__right-about-bold">Alc:</span>
                                        {item.alc} %
                                    </li>

                                    <li className="detail__right-about">
                                        <GiGrapes fill="#663333" size={35}/>
                                        <span className="detail__right-about-bold">Grape:</span>
                                        {item.grape}
                                    </li>

                                    <li className="detail__right-about">
                                        <FaStar fill="#663333" size={35}/>
                                        <span className="detail__right-about-bold">Rating:</span>
                                        {item.rating}
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <Tabs className="detail__bottom" position="relative" variant="unstyled">

                            <TabList className="detail__bottom-tab">
                                <Tab className="detail__bottom-tab-text">Description</Tab>
                                <Tab className="detail__bottom-tab-text">Review</Tab>
                            </TabList>

                            <TabIndicator
                                mt="-1.5px"
                                height="4px"
                                bg="#663333"
                                borderRadius="10px"/>

                            <TabPanels className="detail__bottom-panel">
                                <TabPanel>
                                    <p className="detail__bottom-review">{item.description}</p>
                                </TabPanel>

                                <TabPanel>

                                    <ul className="detail__bottom-review-list">
                                        <li className="detail__bottom-review-item">
                                            <div className="detail__bottom-review-item-left">
                                                <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
                                                
                                                <div className="detail__bottom-review-item-info">
                                                    <p className="detail__bottom-review-item-name">
                                                        Максим Александров
                                                    </p>

                                                    <p className="detail__bottom-review-item-text">
                                                        Привет, вино, просто супер
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="detail__bottom-review-stars" style={{columnGap: "5px"}}>
                                                <FaStar size={20} fill="yellow"/>
                                                <FaStar size={20} fill='yellow'/>
                                                <FaStar size={20} fill='yellow'/>
                                                <FaStar size={20} fill='yellow'/>
                                                <FaStar size={20} fill='yellow'/>
                                            </div>

                                        </li>

                                        <li className="detail__bottom-review-item">
                                            <div className="detail__bottom-review-item-left">
                                                <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />

                                                <div className="detail__bottom-review-item-info">
                                                    <p className="detail__bottom-review-item-text">
                                                        Максим Александров
                                                    </p>

                                                    <p className="detail__bottom-review-item-text">
                                                        Привет, вино, просто супер
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="detail__bottom-review-stars" style={{columnGap: "5px"}}>
                                                <FaStar size={20} fill="yellow"/>
                                                <FaStar size={20} fill='yellow'/>
                                                <FaStar size={20} fill='yellow'/>
                                                <FaStar size={20} fill='yellow'/>
                                                <FaStar size={20} fill='yellow'/>
                                            </div>

                                        </li>

                                        <li className="detail__bottom-review-item">
                                            <div className="detail__bottom-review-item-left">
                                                <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />

                                                <div className="detail__bottom-review-item-info">
                                                    <p className="detail__bottom-review-item-text">
                                                        Максим Александров
                                                    </p>

                                                    <p className="detail__bottom-review-item-text">
                                                        Привет, вино, просто супер
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="detail__bottom-review-stars" style={{columnGap: "5px"}}>
                                                <FaStar size={20} fill="yellow"/>
                                                <FaStar size={20} fill='yellow'/>
                                                <FaStar size={20} fill='yellow'/>
                                                <FaStar size={20} fill='yellow'/>
                                                <FaStar size={20} fill='yellow'/>
                                            </div>

                                        </li>
                                    </ul>

                                    <h2 className="detail__bottom-review-title">
                                        Review
                                    </h2>

                                    <p className="detail__bottom-review-subtitle">
                                        No reviews yet.
                                    </p>


                                    <p className="detail__bottom-review-first">
                                        Be the first to review “{item.name}”
                                    </p>

                                    <p className="detail__bottom-review-rating">
                                        Your mark

                                        <div className="detail__bottom-review-stars">
                                            <FaStar size={35} fill="yellow"/>
                                            <FaStar size={35} fill='yellow'/>
                                            <FaStar size={35} fill='yellow'/>
                                            <FaStar size={35} fill='yellow'/>
                                            <FaStar size={35} fill='yellow'/>
                                        </div>
                                    </p>

                                    <form onSubmit={(e) => submitView(e)} className="detail__bottom-form">
                                        <label className="detail__bottom-form-area">
                                            <textarea value={text} onChange={(e) => setText(e.target.value)} className="detail__bottom-form-area-field" placeholder="Write your view" />
                                        </label>

                                        <button className="detail__bottom-form-btn" type="submit">Submit</button>
                                    </form>
                                </TabPanel>

                            </TabPanels>

                        </Tabs>
                    </div>
                ))
            }
        </section>
    )
}
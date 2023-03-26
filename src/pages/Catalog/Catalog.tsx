import React from "react";
import {Card} from "../../components/Card/Card";
import {useGetWinesQuery} from "../../redux/reducers/wines";


export const Catalog = () => {

    const {isLoading, isError, data} = useGetWinesQuery('')

    return(
        <section className="catalog">
            <div className="container">
                <h2 className="catalog__title">
                    Shop
                </h2>

                <div className="catalog__nav">
                    <ul className="catalog__nav-ul">
                        <li className="catalog__nav-left">Main</li>
                        <li className="catalog__nav-left">{'>'}</li>
                        <li className="catalog__nav-left">Shop</li>
                        <li className="catalog__nav-left">{'>'}</li>
                        <li className="catalog__nav-left">Main </li>
                    </ul>
                    <p className="catalog__nav-left">
                        Display 12-24 of 80
                    </p>
                </div>


                <div className="catalog__content">
                    <aside className="catalog__content-aside">
                        <label className="catalog__content-aside-label">
                            <input className="catalog__content-aside-input" type="text" placeholder="Search by name"/>
                        </label>


                        <div className="catalog__content-aside-label">
                            <select className="catalog__content-aside-select">
                                <option className="catalog__content-aside-option" value='all'>Sort by category</option>

                                {
                                    data?.map(item => (
                                        <option className="catalog__content-aside-option" key={item.id} value={item.category}>{item.category}</option>
                                    ))
                                }
                            </select>
                        </div>


                        <div className="catalog__content-aside-label">
                            <select className="catalog__content-aside-select">
                                <option className="catalog__content-aside-option" value='all'>Default sort</option>
                                <option className="catalog__content-aside-option" value=''>Sort by popularity</option>
                                <option className="catalog__content-aside-option" value=''>Sort by rating</option>
                                <option className="catalog__content-aside-option" value=''>Prices: on an increase</option>
                                <option className="catalog__content-aside-option" value=''>Prices: descending</option>
                                <option className="catalog__content-aside-option" value=''>sorting by reviews</option>
                            </select>
                        </div>


                        <div className="catalog__content-aside-label">
                            <select className="catalog__content-aside-select">
                                <option className="catalog__content-aside-option" value='all'>Sort by country</option>

                                {
                                    data?.map(item => (
                                        <option className="catalog__content-aside-option" key={item.id} value={item.country}>{item.country}</option>
                                    ))
                                }
                            </select>
                        </div>


                    </aside>

                    <div className="catalog__content-right">
                        {
                            data?.map(item => (
                                <Card key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
import React, {useEffect, useState} from "react";
import {Card} from "../../components/Card/Card";
import {useAboutWinesQuery, useGetWinesQuery} from "../../redux/reducers/wines";
import {useDebounce} from "../../hooks/debounce";
import {winesType} from "../../models/models";


export const Catalog = () => {

    const [search,setSearch] = useState('')

    const debounced = useDebounce(search)

    const {data: wines, isLoading}= useGetWinesQuery()

    console.log(wines)
    // const {isLoading, data} = useSearchNameQuery(debounced, {
    //     skip: debounced.length < 3
    // })
    //
    // console.log(data)
    //
    // useEffect(() => {
    //     console.log(debounced)
    // },[debounced])

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
                        Display 12-24 of {wines?.length}
                    </p>
                </div>

                <div className="catalog__content">
                    <aside className="catalog__content-aside">
                        <label className="catalog__content-aside-label">
                            <input value={search} onChange={(e) => setSearch(e.target.value)} className="catalog__content-aside-input" type="text" placeholder="Search by name"/>
                        </label>


                        <div className="catalog__content-aside-label">
                            <select className="catalog__content-aside-select">
                                <option className="catalog__content-aside-option" value='all'>Sort by category</option>

                                {
                                    wines?.map(item => (
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
                                    wines?.map(item => (
                                        <option className="catalog__content-aside-option" key={item.id} value={item.country}>{item.country}</option>
                                    ))
                                }
                            </select>
                        </div>


                    </aside>

                    <div className="catalog__content-right">
                        {isLoading && <p>...Loading</p>}
                        {
                            wines?.map((item,idx) => (
                                <Card key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
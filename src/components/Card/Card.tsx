import React from "react";
import {propsWine, winesType} from "../../models/models";
import {Link} from "react-router-dom";



export const Card = (props: propsWine ) => {


    return(
        <Link to={`/aboutWine/${props.item.id}`} className="cards">
            <div className="cards__bg"
            style={{background: `url("${props.item.image}") center/cover no-repeat`}}>
                <p className="cards__bg-text">
                    {props.item.description}
                </p>
            </div>


            <div className="cards__info">
                <h2 className="cards__info-title">
                    {props.item.name}
                </h2>

                <div className="cards__info-box">
                    <p className="cards__info-price">
                        {props.item.price} KGS
                    </p>

                    <p className="cards__info-price-btn">
                        Подробнее
                    </p>
                </div>
            </div>
        </Link>
    )
}
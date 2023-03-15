import React from "react";


export const Form = () => {
    return (
        <form className="form">
            <h1 className="form__title">Registration</h1>

            <div className="form__box">
                <input className="form__box-field" type="text" placeholder="Name"/>
                <input className="form__box-field" type="text" placeholder="Surname"/>
                <input className="form__box-field" type="text" placeholder="Phone number"/>
                <input className="form__box-field" type="text" placeholder="Email"/>
                <input className="form__box-field" type="text" placeholder="Password"/>
                <input className="form__box-field" type="text" placeholder="Confirm password"/>
            </div>

            <div className="form__agree">
                <label className="form__agree-"></label>
            </div>
        </form>
    )
}
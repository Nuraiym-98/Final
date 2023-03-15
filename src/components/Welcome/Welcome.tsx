import React from 'react';

import {GrInstagram} from 'react-icons/gr'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="container">
                <div className="welcome__centre">
                    <p className="welcome__centre-subtitle">
                        Welcome to
                    </p>
                    <p className="welcome__centre-title">
                        VinoTeka
                    </p>

                    <p className="welcome__centre-bottom">
                        Wines that you will like
                    </p>
                </div>

                <div className="welcome__social">
                    <a className="welcome__social-link" href="https://www.instagram.com/vinotekakg/">
                        <GrInstagram/>
                    </a>
                    <a className="welcome__social-link" href="https://www.facebook.com/Vinoteka.kg/">
                        <FaFacebookSquare/>
                    </a>
                    <a className="welcome__social-link" href="https://api.whatsapp.com/send?phone=996707330105">
                        <AiOutlineWhatsApp/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
import React from "react";
import Welcome from "./Welcome/Welcome";
import {Cozy} from "./Cozy/Cozy";
import {Love} from "./Love/Love";
import {Red} from "./Red/Red";
import {Rose} from "./Rose/Rose";
import {White} from "./White/White";
import {Card} from "./Card/Card";


export const Home = () => {

    return(
        <>
          <Welcome/>
            <Cozy/>
            <Love/>
            <Red/>
            <Rose/>
            <White/>
            <Card/>
        </>
    )
}
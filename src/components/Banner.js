import React from "react";
import bannerhome from "../images/bannerHome.png";
import "../styles/Banner.scss";

function Banner () {

    return (
        <div className= { 'banner' }>
            <img className= {'bannerHome' } src={bannerhome} alt={"Vue mer et falaises"}/>
            <div className={'bannerTxt'}>
                <p> Chez vous, partout et ailleurs</p>
            </div>
        </div>
        )
    }
    
    export default Banner;
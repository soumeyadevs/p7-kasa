import React from "react";
import bannerAbout from "../images/bannerAbout.png";
import "../styles/BannerAbout.scss";

function Banner () {

    return (
        <div className= { 'banner' }>
            <img className= {'bannerAbout' } src={bannerAbout} alt={"Vue mer et falaises"}/>
        </div>
        )
    }
    
    export default Banner;
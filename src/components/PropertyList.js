import React from 'react';
import { Link } from "react-router-dom";
import data from "../data/logements.json";
import "../styles/PropertyList.scss";
//import SingleBlockProperty from './SingleBlockProperty';

const PropertyList = () => {

    return (
        <div className="PropertyListing">
            {data.map((item) => (
               <div className="SinglePropertyBlock" key={item.id}>
                    <Link className={'PropertyGrid'} to={"/property/"+item.id}>
                        <img className="thumb_property" src={item.cover} alt={item.title} />
                        <h2 className="thumb_title">{item.title}</h2>
                    </Link>
               </div>
            ))}
        </div>
    )
}

export default PropertyList;

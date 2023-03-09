import React from "react";
import Header from '../components/Header';
import Banner from '../components/Banner';
import PropertyList from '../components/PropertyList';
import Footer from "../components/Footer";
import '../styles/Home.scss';

const Home = () => {

    return (
        <section className="homeContener">
            <Header/>
            <Banner/>
            <PropertyList/>
            <Footer/>
        </section>
    )

}

export default Home;

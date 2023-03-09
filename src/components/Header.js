import React from 'react';
import Logo from '../images/logo.png';
import Navbar from '../components/Navbar';
import '../styles/Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className='header'>
			<h1><Link  to='/'><img src={Logo} alt="kasa, location d'appartements" /></Link></h1>
			<Navbar />
		</header>
	)
}

export default Header;
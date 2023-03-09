import Data from '../data/logements.json';
// import {useEffect, useState} from "react";
import {useParams, Navigate} from "react-router-dom";
import Header from "../components/Header";
import Slider from "../components/Carousel"
import Collapse from '../components/Collapse';
import GreyStar from '../images/greystar.png';
import RedStar from '../images/redstar.png';
import '../styles/Logement.scss';

function Logement() {
	const { id } = useParams();
	const dataCurrentLogement = Data.find((logement) => logement.id === id);

	if (!dataCurrentLogement) {
        return <Navigate to="/404-not-found" />;
	}
	
    const { title, pictures, description, host, rating, location, equipments, tags } = dataCurrentLogement;

    return (
		<>
			<Header/>
			<Slider imageSlider={pictures}/>
			<main className="logement">
				<div className="logement_content">
					<div className="logement_content_infos">
						<h1>{title}</h1>
						<p>{location}</p>
						<div>
							{tags.map((tag, index) => (
								<button key={index}>{tag}</button>
							))}
						</div>
					</div>
					<div className="logement_content_host">
						<div>
							<div className='logement_content_host_name'>
								<span>{host.name}</span>
							</div>
							<img src={host.picture} alt="host of this logement" />
						</div>
							
						<div className="logement_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? RedStar : GreyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="logement_collapse">
					<div className="logement_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="logement_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
		</>
	)
}

export default Logement;
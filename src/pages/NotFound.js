import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/NotFound.scss";

function NotFound() {
    return (
		<div className='NotFound'>
			<Header />
			<div className="NotFound_infos">
				<h1 className='NotFound_infos_title'>404</h1>
				<p className='NotFound_infos_content'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='NotFound_infos_return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}

export default NotFound;
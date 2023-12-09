import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions}  = useContext(Context);
	const handleDeleteFav = char => {
		actions.delFavorite(char)
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<ul>
			<p>favorites: {store.favorites.length}</p>
		{store.favorites.length>0? store.favorites.map((el,i)=><li key={i}>{el.name} <span onClick={()=>handleDeleteFav(el)}>X</span></li>): ""}
			</ul>

			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};

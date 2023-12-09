import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CharCard } from "../component/card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">

			<div className="row">
				{store.characters?.map((char, index) =>
					<div key={index} className="col-sm-6 col-md-4 col-lg-3 card">
						<CharCard char={char} />
					</div>)}
			</div>

		</div>
	);
}
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const CharCard = props => {
    const {store, actions} = useContext(Context)
    const navigate = useNavigate();

 

    return (
        <>
            <h2>{props.char.name}</h2>
            <p>{props.char.gender}</p>
            <img src={props.char.image} alt={props.char.name} />
            <p>{props.char.status}</p>
            <p>{store.favorites.includes(props.char)? "Yessssssss": "Noooooooo"}</p>
            <button className="btn btn-primary" onClick={() => navigate("/chararcterDetails/" + props.char.id)}>Learn more!</button>
            <button className="btn btn-secondary" onClick={() => actions.addRemoveFav(props.char)}>fav!</button>
        </>
    )
}
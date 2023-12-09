import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const ChararcterDetails = () => {
    // const { id } = useParams();
    const params = useParams();
    const {store, actions} = useContext(Context);
    
    useEffect(()=>{
        actions.loadSingleCharacter(params.id);
    },[])
    return (
        <div className="continaer">

        <h1>Vista de Character Details</h1>
        <h1>{store.singleCharacter?.name}</h1>
        <img src={store.singleCharacter?.image} alt={store.singleCharacter?.name}/>
        </div>
    )
}
import React from "react";
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container" >
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=220x220`} alt="Picture of a Robot"/>
        <h1 key={props.monster.id} name={props.monster.name}>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
);
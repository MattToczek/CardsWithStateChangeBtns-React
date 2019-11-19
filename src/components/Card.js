import React from 'react'

export default function Card(props) {
    const image = `https://api.adorable.io/avatars/285/${props.avatar}.png`;

    return (
        <div className={props.visible ? "card" : "cardHide"}>
            <img src={image} alt="profile image" />
            <div className="details">
                <h1>Name: {props.name}</h1>
                <h3>City: {props.city}</h3>
            </div>
        </div>
    )
}

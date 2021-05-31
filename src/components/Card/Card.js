import React from 'react'
import "./style.css"


function Card({ src, link, name, tags }) {

    return (
        <div className="img-container grow">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="card portfolioCard">
                    <img className="cardImage" src={src} alt="Project One" />
                    <div className="cardText">
                        <p className="cardName">{name}</p>
                        <p className="cardTags">{tags}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card;
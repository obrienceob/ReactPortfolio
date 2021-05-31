import React, { Component } from 'react'
import HomeContext from "../../context/home-context"
import "./style.css"

class ProjectBlock extends Component {
    render() {
        return (
            <HomeContext.Consumer>
                {context => (
                    <div className="container">
                        <div className="cardWrapper">
                            <a href="https://github.com/obrienceob/BudgetTracker" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[3].image} alt="Project Four: Budget Tracker (works offline)" />
                                    <div className="cardText">
                                        <p className="cardName">Budget Tracker</p>
                                        <p className="cardTags">MongoDB, Mongoose, Node, IndexedDB</p>
                                    </div>
                                </div>

                            </a>
                            <a href="https://github.com/ShaylaStevenson/PetSeekerPalooza/" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[4].image} alt="Project Five: Pet Seeker Palooza" />
                                    <div className="cardText">
                                        <p className="cardName">Pet Seeker Palooza</p>
                                        <p className="cardTags">MySQL, JS, Express, Node</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://github.com/obrienceob/FitnessTracker" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[5].image} alt="Project Six: Fitness Tracker" />
                                    <div className="cardText">
                                        <p className="cardName">Fitness Tracker</p>
                                        <p className="cardTags">Mongo, Express, JS</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                )}
            </HomeContext.Consumer>
        )
    }
}

export default ProjectBlock
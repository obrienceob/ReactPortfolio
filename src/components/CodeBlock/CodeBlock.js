import React, { Component } from 'react'
import HomeContext from "../../context/home-context"
import "./style.css"

class CodeBlock extends Component {
    render() {
        return (
            <HomeContext.Consumer>
                {context => (
                    <div className="container">
                        <div className="headerLine">
                            <h3 className="bodyHeader">Code</h3>
                        </div>
                        <div className="cardWrapper">
                            <a href="https://fathomless-dawn-44103.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[0].image} alt="Project One: Google Books Search" />
                                    <div className="cardText">
                                        <p className="cardName">Google Books Search</p>
                                        <p className="cardTags">MongoDB, Express, React, Node</p>
                                    </div>
                                </div>

                            </a>
                            <a href="https://github.com/jshuang2/react-clicky-game" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[1].image} alt="Project Two: Game of Thrones Memory" />
                                    <div className="cardText">
                                        <p className="cardName">Game of Thrones Memory</p>
                                        <p className="cardTags">React</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://github.com/jshuang2/MongoWebScraper" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[2].image} alt="Project Three: Mongo Web Scraper" />
                                    <div className="cardText">
                                        <p className="cardName">Portfolio Website</p>
                                        <p className="cardTags">React, Hooks, Context API</p>
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

export default CodeBlock
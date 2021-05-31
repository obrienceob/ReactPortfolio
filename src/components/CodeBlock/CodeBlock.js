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
                            <h3 className="bodyHeader">Projects</h3>
                        </div>
                        <div className="cardWrapper">
                            <a href="https://github.com/obrienceob/BookSearch" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[0].image} alt="Project One: Google Books Search" />
                                    <div className="cardText">
                                        <p className="cardName">Google Books Search</p>
                                        <p className="cardTags">MongoDB, Express, React, Node</p>
                                    </div>
                                </div>

                            </a>
                            <a href="https://github.com/obrienceob/TechBlog" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[1].image} alt="Project Two: Tech Blog" />
                                    <div className="cardText">
                                        <p className="cardName">Tech Blog</p>
                                        <p className="cardTags">MVC, SQL, Hanlebars, JS</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://github.com/obrienceob/Employee-Directory" target="_blank" rel="noopener noreferrer">
                                <div className="card homeCard grow">
                                    <img className="cardImage" src={context[2].image} alt="Project Three: Employee Directory" />
                                    <div className="cardText">
                                        <p className="cardName">Employee Directory</p>
                                        <p className="cardTags">React, API, Bootstrap</p>
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
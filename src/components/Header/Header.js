import React, { Component } from 'react'
import "./style.css"
import { Link } from "react-router-dom"



class Header extends Component {

    state = {
        isMenuVisible: false
    }

    toggleMenu = () => {
        this.setState(prevState => (
            { isMenuVisible: !prevState.isMenuVisible }
        ));
    }

    // onClickHandler = () => {

    //     // const navMenu = document.getElementById("navbarNavAltMarkup");
    //     // const navItem = document.getElementsByClassName("nav-item");

    //     if (this.state.isOpen === "false") {
    //         // navMenu.style.backgroundColor = "#f9f9f9";
    //         // navMenu.style.width = "20%";
    //         // console.log(navItem);

    //         this.setState({
    //             isOpen: "true",
    //             textColor: "black",
    //             backgroundColor: "red"
    //         })
    //     }

    //     else {
    //         this.setState({
    //             isOpen: "false",
    //             textColor: "white",
    //             backgroundColor: "none"
    //         })
    //     }
    // }

    render() {
        return (<div>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Conor O'Brien</Link>

                    <button className="navbar-toggler" id="hamburger" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={this.state.isOpen} onClick={this.toggleMenu} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={` collapse navbar-collapse ${this.state.isMenuVisible ? "openMenuArea dropdown-menu dropdown-menu-right" : ""}`} id="navbarNavAltMarkup">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item nav-link ${this.state.isMenuVisible ? "openMenu dropdown-item" : "pageLink"}`}><Link to="/about">About</Link></li>
                            <li className={`nav-item nav-link ${this.state.isMenuVisible ? "openMenu dropdown-item" : "pageLink"}`}><Link to="/portfolio">Portfolio</Link></li>
                            <li className={`nav-item nav-link ${this.state.isMenuVisible ? "openMenu dropdown-item" : "pageLink"}`} ><a href="https://drive.google.com/file/d/1kM55O94KfduwMTc0EaqMZUpohq3I0PV5/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                            </li>
                        </ul>


                        <ul className={` navbar-nav ${this.state.isMenuVisible ? "socialMediaDropDown" : "socialMediaList"} `}>
                            <li className={`nav-item nav-link ${this.state.isMenuVisible ? "openMenu dropdown-item socialMediaDropDown" : ""}`}><a href="https://github.com/obrienceob" target="_blank" rel="noopener noreferrer"><i className={`fab fa-github ${this.state.isMenuVisible ? "socialMediaIconDropDown" : "socialMedia"} `}></i></a></li>
                            <li className={`nav-item nav-link ${this.state.isMenuVisible ? "openMenu dropdown-item socialMediaDropDown" : ""}`}><a href="mailto:obrienceob@gmail.com"><i className={` fas fa-envelope ${this.state.isMenuVisible ? "socialMediaIconDropDown" : "socialMedia"} `}></i></a></li>
                            <li className={`nav-item nav-link ${this.state.isMenuVisible ? "openMenu dropdown-item socialMediaDropDown" : ""}`}><a href="https://www.linkedin.com/in/conor-o-brien-4b64228a/" target="_blank" rel="noopener noreferrer"><i className={`fab fa-linkedin-in ${this.state.isMenuVisible ? "socialMediaIconDropDown" : "socialMedia"} `}></i></a></li>
                        </ul>


                    </div>
                </div>
            </nav>
        </div>
        )
    }
}


export default Header
import React from 'react'
import ReactLogo from "../../images/icons8-react-native-144.png"
import MySQLLogo from "../../images/icons8-sql-96.png"
import JavaScriptLogo from "../../images/icons8-javascript-144.png"
import HTMLLogo from "../../images/icons8-html-5-144.png"
import CSSLogo from "../../images/icons8-css3-144.png"
import NodeLogo from "../../images/icons8-nodejs-144.png"
import MongoLogo from "../../images/icons8-mongodb-144.png"
import "./style.css"

function Skills() {
    return (
        <div className="container">
            <h3 className="centerText" id="aboutSectionHeader">Core Skills</h3>
            <div className="d-flex justify-content-center">
                <div className="skillsIconContainer">
                <img src={ReactLogo} alt="React" className="skillsIcon iconOne"></img>
                <img src={MySQLLogo} alt="MySQL" className="skillsIcon iconTwo"></img>
                <img src={JavaScriptLogo} alt="JavaScript" className="skillsIcon iconOne"></img>
                <img src={HTMLLogo} alt="HTML" className="skillsIcon iconTwo"></img>
                <img src={CSSLogo} alt="CSS" className="skillsIcon iconOne"></img>
                <img src={NodeLogo} alt="NodeJS" className="skillsIcon iconTwo"></img>
                <img src={MongoLogo} alt="MongoDB" className="skillsIcon iconOne"></img>
                </div>
            </div>
        </div>
    )
}

export default Skills
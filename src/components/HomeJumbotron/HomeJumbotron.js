import React from 'react'
import "./style.css"
import headshot from "../../images/headshot.jpeg"

function HomeJumbotron() {
    return (
        <div>
            <section id="jumbotron">
                <div className="container">
                    <div id="jumbotronContent">
                        <h2 id="jumbotronHeader">Hello, I'm Conor O'Brien.</h2>
                        <h3 id="headerSubtext">I'm a full-stack web developer based in Seattle, Washington.</h3>
                        <p id="headerParagraphText">While I'm not coding, you can find me playing soccer or basketball, playing with my dog, or snowboarding the mountains of the Pacific Northwest.</p>
                    </div>
                    <img id="profilePic" src={headshot} alt="Conor"></img>
                </div>
            </section>
        </div>
    )
}

export default HomeJumbotron
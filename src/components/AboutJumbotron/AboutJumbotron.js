import React from 'react'
import "./style.css"
import family from "../../images/family.jpeg"
import max from "../../images/Max.jpeg"
import mtRainier from "../../images/mtRainier.jpeg"
import Hawaii from "../../images/Hawaii.jpeg"

function AboutJumbotron() {
    return (
        <div>
            <section id="aboutJumbotron">
                <div className="container">
                    <div id="aboutHeaderContainer">
                    <h2 id="aboutMeHeader">Meet Conor:</h2>
                    </div>
                    <div id="aboutJumbotronContent">
                        <p className="aboutHeaderParagraphText">I have a strong background in project management and complex problem solving. After graduating from the University of Washington in 2013 with a degree in Microbiology, I spent a few years in science before I switched to project management. Every project I worked on I found myself being drawn to the tools, webpages, and technology involed, so I decided it was time to get more technical in my work.</p>

                        
                        <p className="aboutHeaderParagraphText">I enrolled in the University of Washington's full-stack web development coding bootcamp in December 2020. I enjoyed all aspects of the class, and found a passion for problem solving in code. I graduated from bootcamp in June 2021 and am looking forward to more technical projects.</p>
                        
                        
                        <p className="aboutHeaderParagraphText">I excel at technical project management, but I also have experience developing full-stack MERN, REACT front end applications, and MVC full stack apps. I have a thirst for knowledge and am always looking for the newest technology to learn.</p>
                    </div>
                    <div className="aboutImagesContainer">
                    <img id="mtRainier" className="aboutPic" src={mtRainier} alt="Mount Rainier"></img>
                    <img id="Hawaii" className="aboutPic" src={Hawaii} alt="Hawaii"></img> 
                    <img id="Max" className="aboutPic" src={max} alt="My Dog Max"></img>
                    <img id="family" className="aboutPic" src={family} alt="My family"></img>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutJumbotron
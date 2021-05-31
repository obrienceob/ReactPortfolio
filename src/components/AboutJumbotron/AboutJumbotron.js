import React from 'react'
import "./style.css"
import family from "../../images/family.jpeg"

function AboutJumbotron() {
    return (
        <div>
            <section id="aboutJumbotron">
                <div className="container">
                    <div id="aboutHeaderContainer">
                    <h2 id="aboutMeHeader">Who am I?</h2>
                    </div>
                    <div id="aboutJumbotronContent">
                        <p className="aboutHeaderParagraphText">I have a strong background in project management and complex problem solving. After graduating from the University of Washington in 2013 with a degree in Microbiology, after a few years in science I switched to consultiing. Every project I worked on I found myself being drawn to the tools, webpages, and technology involed, so I decided it was time to get more technical in my work.</p>

                        
                        <p className="aboutHeaderParagraphText">I enrolled in the University of Washington's full-stack web development coding bootcamp in December 2020. I can honestly say I've never enjoyed learning more than I did while taking this course. As someone whose life has revolved around computers and technology, I fell in love with coding immediately! I graduated from bootcamp in June 2021 and am looking forward to more technical projects.</p>
                        
                        
                        <p className="aboutHeaderParagraphText">I specialize in front end development with React JS, but I also have experience developing full-stack MERN applications. However, I'm constantly dabbling with new innovative technologies in the programming world.</p>
                    </div>
                    <div className="aboutImagesContainer">
                    {/* <img id="montana" className="aboutPic" src={Montana} alt="Montana"></img>
                    <img id="seattle2" className="aboutPic" src={Seattle2} alt="Seattle"></img>
                    <img id="mtRainier" className="aboutPic" src={MtRainier} alt="Mt Rainier"></img> */}
                    <img id="family" className="aboutPic" src={family} alt="My family"></img>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutJumbotron
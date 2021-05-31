import React, { useState } from 'react'
// import "./style.css"
// import SpaceNeedle from "../../utils/assets/images/space-needle-compressed.jpg";

function Form() {

    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = event => {
        event.preventDefault();

        if (!state.name || !state.email || !state.message) {
            console.log("All fields must be completed!")
            return;
        }

        setState({
            name: "",
            email: "",
            message: ""
        })

    }


    return (
        <div id="contactFormJumbotron">
            <div className="container">
                <h3 id="contactFormHeader">Let's connect!</h3>
                {/* <img src={SpaceNeedle} alt="Seattle" id="seattlePic"></img> */}
                <form id="contactForm">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="John Doe" value={state.name} onChange={event => setState({ ...state, name: event.target.value })} />
                    </div>

                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="John.Doe@gmail.com" value={state.email} onChange={event => setState({ ...state, email: event.target.value })} />
                    </div>

                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Your message..." value={state.message} onChange={event => setState({ ...state, message: event.target.value })}></textarea>
                    </div>

                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </form>

                

            </div>

        </div>
    )
}

export default Form
import React from "react";
import "./style.css";

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div id="contactFormJumbotron">
                <div className="container">
                    <h3 id="contactFormHeader">Let's connect!</h3>
                    <form
                        onSubmit={this.submitForm}
                        action="https://formspree.io/xyyddneo"
                        method="POST"
                        id="contactForm"
                    >

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="John.Doe@gmail.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="4" placeholder="Your message..."></textarea>
                        </div>

                        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="btn btn-primary">Submit</button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </form>

                </div>
            </div>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}
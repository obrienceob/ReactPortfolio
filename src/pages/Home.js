import React, { Component } from 'react';
import Header from "../components/Header/Header";
import HomeJumbotron from "../components/HomeJumbotron/HomeJumbotron";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Footer from "../components/Footer/Footer";
import projects from "../projects.json";
import HomeContext from "../context/home-context";
import "./style.css";

class Home extends Component {

    state = {
        projects
    }

    



    render() {

        // console.log("Here is your context", HomeContext);
        // console.log("Here are your state projects", this.state.projects);

        return (
            <div id="page-container">
                <div id="content-wrap">
                    <Header />
                    <HomeJumbotron />
                    <HomeContext.Provider value={this.state.projects}>
                        <CodeBlock />
                    </HomeContext.Provider>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home
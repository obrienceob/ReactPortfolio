import React, { Component } from 'react'
import Header from "../components/Header/Header";
import CardList from "../components/CardList/CardList";
import Footer from "../components/Footer/Footer";
import "./style.css";

class Portfolio extends Component {
    render() {
        return (
            <div id="page-container">
                <div id="content-wrap">
                    <Header />
                    <CardList />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Portfolio
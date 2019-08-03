import React, { Component } from 'react';
import './regions.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom'

export default class Regions extends Component {
    state = {
        count: 0,
        countries: [],
        regions: []
    };

componentDidMount = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
        this.state.countries = response.data;
        this.state.regions = getUniqeValues(this.state.countries, 'region');
        const filtered = this.state.regions.filter(function (el) {
            return el != '';
        });
        this.setState({
            regions: filtered
        });
    });

    const getUniqeValues = (arr, prop) => {
        return arr.map(function (e) { return e[prop]; }).filter(function (e, i, a) {
            return i === a.indexOf(e);
        });
    }

    }

    render() {
        return (
            <section className="regionList">
                <div className="row copyArea">
                    {this.state.regions.map(reg => {
                        const regSrc= 'https://via.placeholder.com/300x150.png/17a2b8/fff?text='+reg;
                        count: this.state.count++
                        return (
                            <div className="col-sm-4" key={reg}>
                                <div className="card mb-4">
                                    <img src={regSrc} className="card-img-top" alt={reg} />
                                    <div className="card-body">
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                         <NavLink to={reg}>{reg}</NavLink>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}



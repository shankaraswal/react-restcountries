import React, { Component } from 'react';
import './allcountries.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class AllCountries extends Component {
    state = {
        count: 0,
        countries: [],
        visCountries: [],
        length:0
    };

    componentDidMount = () => {
        const { match } = this.props;
        const path = (match.params.reg !== 'all') ? `https://restcountries.eu/rest/v2/region/${match.params.reg}`: 'https://restcountries.eu/rest/v2/all';
        axios.get(path).then(response => {
            this.setState({
                countries: response.data,
                visCountries: response.data,
                length:response.data.length
            });
        });
    }

    sortData = (event) => {
        const sortParam = event.target.value;
        const sortCountries = this.state.countries.sort((a, b) => {
            return b[sortParam] - a[sortParam]
        });
        this.setState({
            count: 0,
            visCountries: sortCountries,
            length:sortCountries.length
        });
    }

    filterCountries = () => {
        let keyw = this.filterText.value.toLowerCase();
        const filterCountryList = this.state.countries.filter(country => {
            let cArr = country.name.toLowerCase();
            return cArr.indexOf(keyw) !== -1;
        });
        this.setState({
            count: 0,
            visCountries: filterCountryList,
            length:filterCountryList.length
        });
    };

    render() {
        return (
            <section className="allCountryList">
                <h2 className="text-danger">All Countries <span className="badge badge-secondary">{this.state.length}</span></h2>
                <nav className="navbar filterRow text-white bg-info my-4">
                    <div className="col-md-7">
                        <label className="text-right col-md-5">Search by Country Name: </label>
                        <input type="text" onChange={this.filterCountries} ref={node => (this.filterText = node)} className="col-md-7 searchBox" />
                    </div>
                    <div className="col-md-4">
                        <label className="col-md-4 text-right">Sort by: </label>
                        <select onChange={this.sortData} className="col-md-8 sortDD">
                            <option value="country">Country Name</option>
                            <option value="population">Population</option>
                            <option value="area">Area</option>
                        </select>
                    </div>
                </nav>

                <div className="row copyArea">
                    {this.state.visCountries.map(country => {
                        count: this.state.count++
                        return (
                            <div className="col-md-4" key={country.alpha2Code}>
                                <div className="card">
                                    <h5 className="card-header alert-info text-info">{this.state.count}: {country.name}</h5>
                                    <div className="card-body row">
                                        <div className="col-md-5 text-center"><img className="imgCountry" src={country.flag} /></div>
                                        <div className="col-md-7 desc">
                                            <p><b>Capital: </b> {country.capital}</p>
                                            <p><b>Region:</b> {country.region}</p>
                                            <p><b>Population: </b> {country.population}</p>
                                            <p><b>Area: </b> {country.area}</p>
                                            <p><b>Alpha Code: </b> {country.alpha2Code}</p>
                                        </div>
                                    </div>
                                    <div className="card-footer text-right">
                                        <NavLink to={`/country/${country.alpha2Code}`} className="text-info">Country Detail</NavLink>
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



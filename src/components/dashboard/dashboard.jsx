import React, { Component } from 'react';
import './dashboard.css';
import { NavLink } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8 alert-danger alert row dashBoradContainer">
                    <div className="col-sm-6 text-right">
                        <h5>Search by:</h5>
                    </div>
                    <div className="col-sm-6">
                        <div><NavLink to={`/${'all'}`}>All Countries</NavLink></div>
                        <div><NavLink to="/countries">All Countries using pagination</NavLink></div>
                        <div><NavLink to="/region">All Regions</NavLink></div>
                    </div>
                </div>
            </div>
        );
    }
}


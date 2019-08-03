import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Nav from './components/navigation/nav.jsx';
import Footer from './components/footer/footer.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import Countries from './components/countries/countries.jsx';
import AllCountries from './components/allcountries/allcountries.jsx';
import Regions from './components/regions/regions.jsx';
import CountryDetail from './components/countrydetail/countrydetail.jsx';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="fluid-container">
        <Header />
        <Router>
          <div>
            <Nav />
            <div className="copyArea container">
            <Switch>
             <Route exact path="/" component={Dashboard} />
                <Route path="/dash" component={Dashboard} />
                <Route path="/countries" component={Countries} />
                <Route path="/region" component={Regions} />
                <Route path="/country/:alpha2Code" component={CountryDetail} />
                <Route path="/:reg" component={AllCountries} />
              </Switch>
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

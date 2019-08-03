import React, { Component } from 'react';
import './countrydetail.css';
import axios from 'axios';

export default class CountryDetail extends Component {
    state = {
        countryDetail: [],
        otherCountries: [],
        currency: []
    };

    componentDidMount() {
        const { match } = this.props;
        console.log(match.params.alpha2Code)
        const path = `https://restcountries.eu/rest/v2/alpha/${match.params.alpha2Code}`;
        axios.get(path).then(response => {
            this.setState({
                countryDetail: response.data,
                otherCountries: response.data.altSpellings.map((res)=>{
                    return res+', '
                 }),
                 currency: response.data.currencies.map((res)=>{
                     return Object.values(res)+', ';
                 }),
            });
        });
     }

    render() {
        return (
            <section>
                
                <div className="countryDetail">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={this.state.countryDetail.flag} className="img-fluid" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <h5 className="mt-0">About {this.state.countryDetail.name}</h5>
                        <p>Lorem ipsum is the nonsense filler text that typically demonstrates the font and style of a text in a document or visual demonstration. Originally from Latin, lorem ipsum has no intelligible meaning, but is simply a display of letters and characteristics to be viewed as a sample with given graphical elements in a file. Lipsum (portmanteau of lorem and ipsum) generators are commonly used to form generic text in a file. The “gibberish” is adequately like normal text to demonstrate a font, but does not distract the reader with its content. It has been used as placeholder text since the 16th century.</p>
                        <ul>
                            <li>Capital: <b>{this.state.countryDetail.capital}</b></li>
                            <li>Region: <b>{this.state.countryDetail.region}</b></li>
                            <li>Sub-region: <b>{this.state.countryDetail.subregion}</b></li>
                            <li>Calling Code: <b>{this.state.countryDetail.callingCodes}</b></li>
                            <li>Other Name: <b>{this.state.otherCountries}</b></li>
                            <li>Currency: <b>{this.state.currency}</b></li>
                            <li>Population: <b>{this.state.countryDetail.population}</b></li>
                            <li>Demonym: <b>{this.state.countryDetail.demonym}</b></li>
                            <li>Area: <b>{this.state.countryDetail.area}</b></li>
                            <li>Code: <b>{this.state.countryDetail.numericCode}</b></li>
                            <li>Timezone: <b>{this.state.countryDetail.timezones}</b></li>
                        </ul>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                      </div>
                    </div>
                </div>
            </section>
        );
    }
}



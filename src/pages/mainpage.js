import React, { Component } from 'react'
import Banner from '../components/banner'
import DistFinder from '../components/distcal'
import Navigation from '../components/navigation'
import Result from '../components/result'
import axios from 'axios'

class Mainpage extends Component {

    state = {
        cname1: '',
        cname2: '',
        lat: '',
        lng: ''
    };

    // componentDidMount() {
    //     this.fetchData();
    // }

    handleInput = (event, event2) => {
        this.setState({
            cname1: event.target.value,
            cname2: event2.target.value,
            lat: '',
            lng: ''
        })
    }


    fetchData = () => {

        const cname1 = this.state.cname1
        const cname2 = this.state.cname2


        axios.get('https://restcountries.eu/rest/v2/name/' + cname1 + '?fullText=true')
            .then((response) => {
                const { latlng } = response.data[0];
                const lat = latlng[0];
                const lng = latlng[1];


                this.setState({ lat, lng });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Navigation />
                <Banner heading="Distance Calculator" subheading="Simple Distance Calculator App to find distance between two Countries" />
                <DistFinder search={this.fetchData} changed={this.handleInput} />
                <Result name={this.state.lat} />
            </div>
        )
    }
}


export default Mainpage

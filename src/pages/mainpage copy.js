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

    handlefirstInput = event => {
        this.setState({
            cname1: event.target.value
        })
    }

    handlesecondInput = event => {
        this.setState({
            cname2: event.target.value
        })
    }


    fetchData = () => {

        const cname2 = this.state.cname2

        console.log(cname2);


        axios.get('https://restcountries.eu/rest/v2/name/' + cname2 + '?fullText=true')
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
                <DistFinder search={this.fetchData} Fonechanged={this.handlefirstInput} Ftwochanged={this.handlesecondInput} />
                <Result name={this.state.lat} />
            </div>
        )
    }
}


export default Mainpage

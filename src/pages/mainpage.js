import React, { Component } from 'react'
import Banner from '../components/banner'
import DistFinder from '../components/distcal'
import Navigation from '../components/navigation'
import Result from '../components/result'
import axios from 'axios'

class Mainpage extends Component {

    state = {
        // cname1: '',
        // cname2: '',
        // lat1: '',
        // lng1: '',
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
        const cname1 = this.state.cname1
        const cname2 = this.state.cname2


        axios.all([
            axios.get('https://restcountries.eu/rest/v2/name/' + cname1 + '?fullText=true'),
            axios.get('https://restcountries.eu/rest/v2/name/' + cname2 + '?fullText=true')])
            .then(axios.spread((firstResponse, secondResponse) => {

                const latlng1 = firstResponse.data[0].latlng;

                const lat1 = latlng1[0]
                const lng1 = latlng1[1]

                this.setState({ lat1, lng1 });

                const latlng2 = secondResponse.data[0].latlng;

                const lat2 = latlng2[0]
                const lng2 = latlng2[1]

                this.setState({ lat2, lng2 });






                

                console.log(firstResponse.data, secondResponse.data);
            }))
            .catch(error => console.log(error));





        // axios.get('https://restcountries.eu/rest/v2/name/' + cname2 + '?fullText=true')
        //     .then((response) => {
        //         const { latlng } = response.data[0];
        //         const lat = latlng[0];
        //         const lng = latlng[1];


        //         this.setState({ lat, lng });
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }

    render() {
        return (
            <div>
                <Navigation />
                <Banner heading="Distance Calculator" subheading="Simple Distance Calculator App to find distance between two Countries" />
                <DistFinder search={this.fetchData} Fonechanged={this.handlefirstInput} Ftwochanged={this.handlesecondInput} />
                <Result lat1={this.state.lat1} lng1={this.state.lng1} lat2={this.state.lat2} lng2={this.state.lng2} />
            </div>
        )
    }
}


export default Mainpage

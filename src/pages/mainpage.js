import React, { Component } from 'react'
import { connect } from 'react-redux'
import Banner from '../components/banner'
import DistFinder from '../components/distcal'
import Navigation from '../components/navigation'
import Result from '../components/result'
// import axios from 'axios'



class Mainpage extends Component {

    // state = {
    //     dist: '0'
    // };

    // handlefirstInput = event => {
    //     this.setState({
    //         cname1: event.target.value
    //     })
    // }

    // handlesecondInput = event => {
    //     this.setState({
    //         cname2: event.target.value
    //     })
    // }


    // fetchData = () => {
    //     const cname1 = this.state.cname1
    //     const cname2 = this.state.cname2


    //     axios.all([
    //         axios.get('https://restcountries.eu/rest/v2/name/' + cname1 + '?fullText=true'),
    //         axios.get('https://restcountries.eu/rest/v2/name/' + cname2 + '?fullText=true')])
    //         .then(axios.spread((firstResponse, secondResponse) => {

    //             const latlng1 = firstResponse.data[0].latlng;
    //             const latlng2 = secondResponse.data[0].latlng;

    //             const lat1 = latlng1[0]
    //             const lng1 = latlng1[1]
    //             const lat2 = latlng2[0]
    //             const lng2 = latlng2[1]
    //             const unit = "K"


    //             if ((lat1 === lat2) && (lng1 === lng2)) {
    //                 return 0;
    //             }
    //             else {
    //                 var radlat1 = Math.PI * lat1 / 180;
    //                 var radlat2 = Math.PI * lat2 / 180;
    //                 var theta = lng1 - lng2;
    //                 var radtheta = Math.PI * theta / 180;
    //                 var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    //                 if (dist > 1) {
    //                     dist = 1;
    //                 }
    //                 dist = Math.acos(dist);
    //                 dist = dist * 180 / Math.PI;
    //                 dist = dist * 60 * 1.1515;
    //                 if (unit === "K") { dist = dist * 1.609344 }
    //                 if (unit === "N") { dist = dist * 0.8684 }

    //                 dist = dist + " Km"
    //             }

    //             this.setState({ dist })

    //         }))
    //         .catch(error => console.log(error));

    // }



    render() {
        return (
            <div>
                <Navigation />
                <Banner heading="Distance Calculator" subheading="Simple Distance Calculator App to find distance between two Countries" />
                <DistFinder search={this.props.onSubmit} Fonechanged={(event) => this.props.onFirstInput(event.target.value)} Ftwochanged={(event) => this.props.onSecondInput(event.target.value)} />
                <Result distance={this.props.dist} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dist: state.dist
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFirstInput: (event) => dispatch({ type: 'ASSIGN_CNAME1', value: event }),
        onSecondInput: (event) => dispatch({ type: 'ASSIGN_CNAME2', value: event }),
        onSubmit: () => dispatch({ type: 'FETCH_DATA' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mainpage)

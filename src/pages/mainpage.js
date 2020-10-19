import React from 'react'
import Banner from '../components/banner'
import DistFinder from '../components/distcal'
import Navigation from '../components/navigation'
import Result from '../components/result'

const Mainpage = () => {
    return (
        <div>
            <Navigation />
            <Banner heading="Distance Calculator" subheading="Simple Distance Calculator App to find distance between two Countries" />
            <DistFinder />
            <Result name="113 miles" />
        </div>
    )
}

export default Mainpage

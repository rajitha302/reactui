import React from 'react'
import Navigation from '../components/navigation'
import Result from '../components/result'
import Banner from '../components/banner'
import Timezonefinder from '../components/timezonefinder'

const Timezone = () => {
    return (
        <div className="timezone">
            <Navigation />
            <Banner heading="Timezone Finder" subheading="Simple TImezone Finder App to find timezones in different countries" />
            <Timezonefinder />
            <Result name="IST (India Standard Time)
UTC/GMT +5:30 hours" />

        </div>
    )
}

export default Timezone

import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {requestTimezoneCountries} from '../redux/actions'

const TimezoneRange = () => {

    let countryRange = [];
    countryRange = useSelector((state) => state.timezoneRange.timezonerange);

    const dispatch = useDispatch();


    // const rangeValue = useSelector((state) => state.timezonerange.timezonerange)

    let setFirstInput;
    let setSecondInput;
    
    const handlefirstOnChange = (event) => {
        setFirstInput = event;
    }

    const handlesecondOnChange = (event) => {
        setSecondInput = event;
    }

    const getCountryListHandler = () => {
       const onChangeState = {
           firstInput: setFirstInput,
           secondInput: setSecondInput
       }
dispatch(requestTimezoneCountries(onChangeState));
    }

    return (
        <div>
            <input type="text" placeholder="Ex: UTC 7.00" onChange={(event) => handlefirstOnChange(event.target.value) }/>
            <p>to</p>
            <input type="text" placeholder="Ex: UTC 8.00" onChange={(event) => handlesecondOnChange(event.target.value) }/>
            <button onClick={() => getCountryListHandler()}>Search</button>

            { 
                countryRange ? countryRange.map((country, index) => {
                    return (
                      <li key={index}>
                        {country.name}
                      </li>
                    );
                  }): <p>Please enter your inputs</p>
            }

                {    console.log(countryRange)}
        </div>
    )
}

export default TimezoneRange

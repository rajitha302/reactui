import React from 'react'
import {requestCharacterRC} from '../redux/actions'
import {useSelector, useDispatch} from 'react-redux'

const Characters = () => {
    let countries = [];
    let onChangeState;
    countries = useSelector((state) => state.charRCcountryList.countryList);

    // console.log(countries);
    
    const dispatch = useDispatch();
    

    const onChangeHandler = (event) => {
       onChangeState = {
           letters: event
    }
    }

    const getCountryListHandler = () => {
        dispatch(requestCharacterRC(onChangeState));
    }

    return (
        <div>
            <input type="text" placeholder="search here" onChange={(event) => onChangeHandler(event.target.value)}/>
            <button onClick={() => getCountryListHandler()}>search</button>
            { 
                countries ? countries.map((country, index) => {
                    return (
                      <li key={index}>
                        {country}
                      </li>
                    );
                  }): <p>Please enter your inputs</p>
            }
        </div>
    )
}

export default Characters

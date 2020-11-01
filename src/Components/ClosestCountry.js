import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {requestClosestCountry} from '../redux/actions'

const ClosestCountry = () => {
    const dispatch = useDispatch();
    const closestCountry = useSelector ((state) => state.closestCountry.closestCountry);

    // Local State
    // const [countryName, setCountryName] = useState('');

    let setCountryName = '';

    const handlecname = (event) => {
        setCountryName = event
    };

    const getcountryhandler = () => {
        const onChangeState = {
            countryName: setCountryName
        }

        // Dispatch Local state to Action
        dispatch(requestClosestCountry(onChangeState));
    };

    // --------------------------------------------------------------- //

    return (
        <div>
            <input type="text" onChange={(event) => handlecname(event.target.value)} placeholder="type a country name"/>
            <button onClick={()=> getcountryhandler()}>Find the closest country</button>
            <p>Result: {closestCountry}</p>
        </div>
    )
}

export default ClosestCountry

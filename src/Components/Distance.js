import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {requestDistance} from '../redux/actions'

const Distance = () => {
    const distance = useSelector((state) => state.distance.distance)
    const dispatch = useDispatch();

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleFrom = (fromEvent) => {
        setTo(fromEvent)
    };

    const handleTo = (toEvent) => {
        setFrom(toEvent)
    };
 


    const getdistancehandler = () => {
        const onchangestate = {
            from: from,
            to: to
        };
// console.log(onchangestate.from)
// console.log(onchangestate.to)
        dispatch(requestDistance(onchangestate));
    };
    
    return (
        <div>
            <input type="text" placeholder="from" onChange={(event) => handleFrom(event.target.value)}/>
            <input type="text" placeholder="to" onChange={(event) => handleTo(event.target.value)}/>
            <button onClick={() => getdistancehandler()}>Search</button>
    <p>Result: {distance}</p>
        </div>
    )
}

export default Distance

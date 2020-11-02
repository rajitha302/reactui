import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {requestDistance} from '../redux/actions'
import {
    Redirect,
    Link
  } from "react-router-dom";

const Distance = () => {
    const distance = useSelector((state) => state.distance.distance)
    const dispatch = useDispatch();

    // const [from, setFrom] = useState('');
    // const [to, setTo] = useState('');

    let data = {
        from: '',
        to: ''
    }

    const handleFrom = (fromEvent) => {
        data.from = fromEvent
    };

    const handleTo = (toEvent) => {
        data.to = toEvent
    };

    const getdistancehandler = () => {
        const onchangestate = {
            from: data.from,
            to: data.to
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
            <Link to="/character">c</Link>
        </div>
    )
}

export default Distance

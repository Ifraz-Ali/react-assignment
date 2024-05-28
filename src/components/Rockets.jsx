import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { setRcokets } from '../redux/rocket/RocketSlice';
import './Rocket.css';
import RocketItem from './RocketItem';

const Rockets = () => {
    const rockets = useSelector((state) => state.rocket.value);
    const dispatch = useDispatch()
    // const [allRockets, setAllRockets] = useState([]);


    const getAllRockets = async () => {
        try {
            let response = await fetch("http://api.spacexdata.com/v4/rockets");
            response = await response.json();
            console.log(response);
            // setAllRockets(response);
            dispatch(setRcokets(response));
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllRockets();
    }, [])
    return (
        <div>
            <Navbar />
        
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {rockets.map((rocket) => (
                    <RocketItem rocket={rocket} />
                ))}
            </div>
        </div>
    )
}

export default Rockets
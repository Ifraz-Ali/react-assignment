import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Mission.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMissions } from '../redux/mission/MissionSlice';

const Missions = () => {

    const missions = useSelector((state) => state.mission.value);
    const dispatch = useDispatch();
    const [isReserved, setIsReserved] = useState(false)
    const getAllMissions = async () => {
        try {
            let response = await fetch("http://api.spacexdata.com/v3/missions");
            response = await response.json();
            console.log(response);
            // setAllMissions(response);
            dispatch(setMissions(response));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllMissions();

    }, [])

    return (
        <div>
            <Navbar />
            <div className='mission-table-container'>
                <table>
                    <thead>
                        <th>Mission</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {missions.map((mission) => (
                            <tr>
                                <td>{mission.mission_name}</td>
                                <td>
                                    {mission.description}
                                </td>
                                <td>{isReserved? <button>Active Member</button>
                                    : <button>Not a Member</button>}
                                </td>
                                <td>{isReserved? <button onClick={()=> setIsReserved(false)}>Leave Mission</button>
                                :<button onClick={()=> setIsReserved(true)}>Join Mission</button>}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Missions
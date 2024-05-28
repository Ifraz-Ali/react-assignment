import React from 'react'
import Navbar from './Navbar'
import './Profile.css';
import Missions from './Missions';

const Profile = () => {
    return (
        <div>
            <Navbar />
            Profile
            <div className='profile-container'>
                <div>
                    <h3>My Missions</h3>
                    <p>{}</p>
                </div>
                <div>
                    <h3>My Rockets</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile
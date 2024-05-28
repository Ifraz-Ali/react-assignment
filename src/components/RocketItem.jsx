import { useState } from "react";

const RocketItem = (props) => {
    const { rocket } = props;

    const [reserved, setReserved] = useState(false);
    return (
        <div className='rocket-wrapper'>
            <div className='rocket-container'>
                <div className='rocket-img-wrapper'>
                    <img src={rocket.flickr_images} alt="rocket images" />
                </div>
                <div className='rocket-description'>
                    <h3>{rocket.name}</h3>
                    <p>{reserved ?
                        <p className="reserve-msg">Reserved</p>
                        : <p style={{display: "none"}}></p> }{rocket.description}</p>
                    {reserved ?
                        <button className='cancel-reserve-btn' onClick={() => setReserved(false)}>Cancel Reservation</button>
                        : <button className='reserve-btn' onClick={() => setReserved(true)}>Reserve Rocket</button>}
                </div>
            </div>
        </div>
    )
}

export default RocketItem;
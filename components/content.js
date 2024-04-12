import React from "react"

export default function MainContent(props) {
    
    return (
        <div className="main-content-container">
            <div className="individual-trip-container">
                <div className="cropped-image">
                    <img src={props.imageUrl} className="destination--image"/>
                </div>
                <div className="destination-info">
                        <div className="location-info">
                                <img src="./images/location-dot-solid.svg" className="location--marker"/>
                                <i className="fa-solid fa-location-dot"></i>
                                <p>{props.location}</p>
                            <a href={props.googleMapsUrl}>View on Google Maps</a>
                        </div>
                    <h2>{props.title}</h2>
                    <p className="trip--dates">{props.startDate} - {props.endDate}</p>
                    <p className="trip--description">{props.description}</p>
                </div>
            </div>
            {props.test}
        </div>
    )
}
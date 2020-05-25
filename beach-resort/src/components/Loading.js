import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'

export default function Loading() {
    return (
        <div className="Loading">
            <h4>Rooms Data </h4>
            <img src={loadingGif} alt=""></img>
        </div>
    )
}

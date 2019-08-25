// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    return <div className='review-list'>
        <div className='reviews'>{props.reviews.headline}</div>
    </div>
}

export default MovieReviews
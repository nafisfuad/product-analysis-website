import React from 'react';
import './Review.css'

const Review = (props) => {
    const {body, user} = props.review;
    const username = user.username;
    return (
        <div className='review'>
            <p>Name: {username}</p>
            <p>Review: {body}</p>
            <p>Rating: {(Math.random() * (5 - 3) + 3).toFixed(2)}</p>
        </div>
    );
};

export default Review;
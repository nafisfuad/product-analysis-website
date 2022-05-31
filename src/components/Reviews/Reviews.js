import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1>What our customers say!</h1>
            <div className='reviews'>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
            </div>
            
        </div>
    );
};

export default Reviews;
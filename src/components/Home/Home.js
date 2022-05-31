import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/reviews');
    }
    return (
        <div>
            <section style={{display: 'flex', justifyContent: 'space-around'}}>
            <div>
                <h1>NEXT IT Partner</h1>
                <h1>BEST Service</h1>
                <p>Best IT service you need.</p>
            </div>
            <img width="50%" src="../../images/Products-And-Services.jpg" alt="" />
            </section>
            <section>
                <div className='reviews'>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                    
                </div>
            
            </section>
            <button style={{marginTop: '10px'}} onClick={handleNavigate}>See All Reviews</button>
        </div>
    );
};

export default Home;
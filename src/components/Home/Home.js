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
            <section style={{display: 'flex'}}>
            <div>
                <h1>NEXT PRODUCT</h1>
                <h1>BEST PRODUCT</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti cumque maxime, nihil dolore facere harum alias accusantium repudiandae, cupiditate laudantium dolorum ducimus amet. Libero ea repellendus odio quis laboriosam.</p>
            </div>
            <img src="../../images/Products-And-Services.jpg" alt="" />
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
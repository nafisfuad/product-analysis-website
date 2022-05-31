import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/comments')
        .then(res => res.json())
        .then(data => setReviews(data.comments));
    }, []);

    return [reviews, setReviews];
}

export default useReviews;
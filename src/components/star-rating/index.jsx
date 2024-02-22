import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import './style.css';

export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        // setHover(0);
        setHover(rating);
    }

    return (
        <div className="star-rating">
            <h1>Star Rating</h1>
            {
            [...Array(noOfStars)].map((_, index) => {
            index += 1;

            return (
            <FaStar
                key={index}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}
                className={index <= (hover || rating) ? "active" : "inactive"}
            />
            );
            })
            }
        </div>
    );
}
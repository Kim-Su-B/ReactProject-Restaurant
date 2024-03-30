import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt as faHalfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import React from "react";

const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating); // 채워진 별의 개수
    const hasHalfStar = rating % 1 !== 0; // 반 별이 있는지 여부

    const renderStar = (filled, half) => {
        return (
            <span className="star">
                {filled ? <FontAwesomeIcon icon={faSolidStar} style={{color: "#FFD43B"}} /> : half ? <FontAwesomeIcon icon={faHalfStar} style={{color: "#FFD43B"}} /> : <FontAwesomeIcon icon={faRegularStar} style={{color: "#FFD43B"}} />}
            </span>
        );
    };

    return (
        <div>
            {[...Array(filledStars)].map((_, index) => (
                renderStar(true, false)
            ))}
            {hasHalfStar && renderStar(false, true)}
            {[...Array(5 - filledStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
                renderStar(false, false)
            ))}
        </div>
    );
};

export default StarRating;

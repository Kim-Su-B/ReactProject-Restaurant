import React, { useState } from "react";
import '../components/AllReviewListItem.css'
import StarRating from "./StarRating";
import ReportModal from "./modal/ReportModal"; // ReportModal 컴포넌트를 import

const AllReviewListItem = ({ reviews }) => {
    const [selectedReviewId, setSelectedReviewId] = useState(null);
    
    const openReportModal = (reviewId) => {
        setSelectedReviewId(reviewId);
    };

    const closeReportModal = () => {
        setSelectedReviewId(null);
    };

    return (
        <div className="allReviewListItemMain">
            {reviews.map(review => (
                <div key={review.id} className="allReviewListItemMainContainer">
                    <div className="allReviewListItem-user-name">{review.name}</div>
                    <div className="allReviewListItemScoreGroup">
                        <div className="allReviewListItem-star-icon">
                            <StarRating rating={review.score} />
                        </div>
                        <div className="allReviewListItemScoreNumber">{review.score}</div>
                        <div className="allReviewListItemDay">{review.date}</div>
                        {/* 클릭 시 해당 리뷰의 ID를 전달하여 모달을 열도록 함 */}
                        <button className="allReviewListItemReport" onClick={() => openReportModal(review.id)}>신고하기</button>
                        {/* 선택된 리뷰 ID가 있는 경우에만 모달을 열도록 설정 */}
                        {selectedReviewId === review.id && <ReportModal isOpen={true} onClose={closeReportModal} />}
                    </div>
                    <div className="allReviewListItemText">{review.reviewTxt}</div>
                </div>
            ))}
        </div>
    )
}

export default AllReviewListItem;

import { useState } from "react";
import '../components/ReviewList.css'
import StarRating from "./StarRating";
import ReportModal from "./modal/ReportModal";

const ReviewList = ({reviewData}) => {
    const [selectedReviewId, setSelectedReviewId] = useState(null);

    const openReportModal = (reviewId) => {
        setSelectedReviewId(reviewId);
    };

    const closeReportModal = () => {
        setSelectedReviewId(null);
    };

    return (
        <div className="review-list">
            {reviewData.map(review => (
                <div key={review.id} className="review-container">
                    <div className="review-user-name">{review.name}</div>
                    <div className="reviewScoreGroup">
                        <div className="review-star-icon">
                            <StarRating rating={review.score} />
                        </div>
                        <div className="reviewScoreNumber">{review.score}</div>
                        <div className="reviewDay">{review.date}</div>

                        {/* 클릭 시 해당 리뷰의 ID를 전달하여 모달을 열도록 함 */}
                        <button className="reviewReport" onClick={() => openReportModal(review.id)}>신고하기</button>
                        {/* 선택된 리뷰 ID가 있는 경우에만 모달을 열도록 설정 */}
                        {selectedReviewId === review.id && <ReportModal isOpen={true} onClose={closeReportModal} />}
                    </div>
                    <div className="reviewText">{review.reviewTxt}</div>
                </div>
            ))}
        </div>
    )
}

export default ReviewList;
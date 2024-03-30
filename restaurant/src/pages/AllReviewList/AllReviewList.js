import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../AllReviewList/AllReviewList.css';
import Navbar from "../../navbar/Navbar";
import AllReviewListItem from '../../components/AllReviewListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../../components/StarRating";

const AllReviewList = () => {
    const [reviews, setReviews] = useState([
        { id: 1, name: '김수빈인데옹?', score: "5.0", date: '오늘', reviewTxt: '직원이 친절해요' },
        { id: 2, name: '김수빈', score: "3.0", date: '오늘', reviewTxt: '직원이 친절해요' },
        { id: 3, name: '어쩌라고요', score: "3.0", date: '오늘', reviewTxt: '직원이 친절해요' },
        { id: 4, name: '하기싫어', score: "5.0", date: '오늘', reviewTxt: '직원이 친절해요친절해요' }
    ]);

    const [averageScore, setAverageScore] = useState(0); // 평균 점수를 저장할 상태

    const navigate = useNavigate();

    //평균 점수
    useEffect(() => {
        let totalScore = 0;
        for (let i = 0; i < reviews.length; i++) {
            totalScore += parseFloat(reviews[i].score);
        }
        const avgScore = totalScore / reviews.length;
        setAverageScore(avgScore); // 평균 점수 업데이트
    }, [reviews]);


    const handleBack = () => {
        navigate(-1); //뒤로가기
    };

    return (
        <section className='AllReviewListMainContainer'>
            <Navbar />
            <div className="container-frame-allReviewPage" />
            <div className='AllReviewListTitleContainer'>
                <FontAwesomeIcon icon={faChevronLeft} className='chveronLeftIcon-AllReviewList' onClick={handleBack} />
                <div className='AllReviewListTitle'>부천대학교 꿈집</div>
            </div>
            <div className="BarChartContainer">
                <div className="BarChartContent">
                    <StarRating rating={averageScore} />
                    <div className="ReivewBarChartAverageScore">{averageScore.toFixed(1)}</div>
                </div>
                <div className="testtt">|</div>
                <div className="BarChartContentTxt">
                    <div className="BarChartContentText">{reviews.length}{"개의 평가"}</div> {/* */}
                </div>
            </div>
            <div className="TxtContentContainer">
                <div className="TxtContent">실제 페이팅을 통해 방문한 이용자들이 남긴 평가입니다.</div>
                <button className="ReviewTextContainer">
                    <div className="ReviewTextContent">리뷰작성</div>
                    <FontAwesomeIcon icon={faArrowRight} style={{color:"white"}}/>
                </button>
            </div>
            <div className="AllReviewListItemContainer">
                <AllReviewListItem reviews={reviews} />
            </div>
        </section>
    )
}

export default AllReviewList;

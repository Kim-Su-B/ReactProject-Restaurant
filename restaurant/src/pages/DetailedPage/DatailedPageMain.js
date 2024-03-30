import '../DetailedPage/DetailedPageMain.css';
import Navbar from '../../navbar/Navbar';
import MenuList from "../../components/MenuList";
import ReviewList from "../../components/ReviewList";
import Information from './DeatailedPageComponents/Information';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailedPageMain = () => {
    const movePage = useNavigate();

    const [reviewData, setReviewData] = useState([
        { id: 1, name: '김수빈인데옹?', score: "5.0", date: '오늘', reviewTxt: '직원이 친절해요' },
        { id: 2, name: '김수빈', score: "3.5", date: '오늘', reviewTxt: '직원이 친절해요' },
        { id: 3, name: '어쩌라고요', score: "3.0", date: '오늘', reviewTxt: '직원이 친절해요' },
        { id: 4, name: '하기싫어', score: "5.0", date: '오늘', reviewTxt: '직원이 친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요' },
        { id: 5, name: '하기싫어', score: "5.0", date: '오늘', reviewTxt: '직원이 친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요친절해요' }
    ]);

    const [averageScore, setAverageScore] = useState(0); //평균 점수를 저장할 상태

    //평균 점수
    useEffect(() => {
        let totalScore = 0;
        for (let i = 0; i < reviewData.length; i++) {
            totalScore += parseFloat(reviewData[i].score);
        }
        const avgScore = totalScore / reviewData.length;
        setAverageScore(avgScore); // 평균 점수 업데이트
    }, [reviewData]);


    function allmenu() {
        movePage('allMenuList');
    }

    function reviewList() {
        movePage('allReviewList', { state: { reviewData: reviewData, averageScore:averageScore }}); 
    }

    return (
        <section className='DetailedPageMainContainer'>
            <Navbar />
            <div className="DetailedPageMainLine" />
            {/* <div className='RestaurantMainContainer'> */}
            <div className='DetailedPageRestaurantMainContent'>
                <div className='RestaurantMainImg'>
                    <img src='twosome.jpeg' />
                </div>
                <div className='RestaurantInformationContent'>
                    <Information reviewData={reviewData} averageScore={averageScore}/>
                </div>
            </div>
            {/* </div> */}
            <div className="DetailedPageLine" />
            <div className="restaurantIntroductionContainer">
                <div className="restaurantIntroductionTitle">매장소개</div>
                <div className="introductionContent">저희 매장은 오븐에 구운 치킨을 만들고있습니다~
                    가성비가 매우매우 별로입니당! 매장 소개는 대충 몇자이내 이런 제한이 있으면 좋을 거 같아요~
                    소개가 길어지면 지루하지요~</div>
            </div>
            <div className="DetailedPageLine" />
            <div className="allMenuContainer">
                <div className="allMenuTitle">전체메뉴</div>
                <MenuList />
                <div className="allMenuBtnContainer">
                    <button className="allMenuBtn" onClick={allmenu}>
                        <div className="menuBtnGroup">
                            <div className="menuBtnText">메뉴 전체보기</div>
                            <div className="menuBtnImg">
                                <img src="vector.png" alt="이미지 없음" className="menuVectorImg" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="DetailedPageLine" />
            <div className="reviewListContainer">
                <div className="reviewListTitle">{'리뷰'} {reviewData.length}{'건'}</div>
                <ReviewList reviewData={reviewData}/>
                <div className="allReviewBtnContainer">
                    <button className="allReviewBtn" onClick={reviewList}>
                        <div className="allReviewBtnGroup">
                            <div className="allReviewText">리뷰 전체보기</div>
                            <div className="allReviewImg">
                                <img src="vector.png" alt="이미지 없음" className="reviewVectorImg" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DetailedPageMain;
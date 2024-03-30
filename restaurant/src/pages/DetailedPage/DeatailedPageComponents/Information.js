import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../DeatailedPageComponents/Information.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faHeart as fasHeart } from "@fortawesome/free-regular-svg-icons"; // 빈 하트
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"; // 채워진 하트
import { useState } from 'react';

const Information = ({reviewData, averageScore}) => {
    const [isFilledHeart, setIsFilledHeart] = useState(false); // 하트가 채워져 있는지 여부를 저장하는 상태

    // 하트 클릭 핸들러
    const handleHeartClick = () => {
        setIsFilledHeart(!isFilledHeart); // 클릭할 때마다 하트 상태를 토글
    };

    return (
        <div className='InformationMainContainer'>
            <div className='RestaurantNameContainer'>
                <div className='RestaurantName'>매장 이름</div>
                <FontAwesomeIcon icon={isFilledHeart ? solidHeart : farHeart} className='HeartIcon' onClick={handleHeartClick} />
            </div>
            <div className='RestaurantAddressContainer'>
                <div className='RestaurantAddress'>인천 남동구 간석동 273-1 A동</div>
            </div>
            <div className="ReviewScoreContainer">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <div className="ReviewScoreNum">
                    {averageScore} ({reviewData.length})
                </div>
            </div>
            <div className='InformationSubContainer'>
                <div className='InformationSubTitle'>영업 정보</div>
                <div className='InformationSubContent'>
                    <div className='InformationTimeContainer'>
                        <div className='InformationTimeTitle'>영업시간</div>
                        <div className='InformationTimeContent'>09:00 ~ 22:00</div>
                    </div>
                    <div className='BreakTimeContainer'>
                        <div className='BreakTimeTitle'>휴식시간</div>
                        <div className='BreakTimeContent'>13:00 ~ 15:00</div>
                    </div>
                    <div className='HoliDayContainer'>
                        <div className='HoliDayTitle'>휴무일</div>
                        <div className='HoliDayContent'>매주 월요일 휴무</div>
                    </div>
                    <div className='PhoneNumberContainer'>
                        <div className='PhoneNumberTitle'>전화번호</div>
                        <div className='PhoneNumberContent'>010-1234-7256</div>
                    </div>
                </div>
            </div>
            <div className='InformationMainButtonGroup'>
                <div className='ReservationBtnContainer'>
                    <button className='ReservationBtn'>예약신청</button>
                </div>
                <div className='WaitingBtnContainer'>
                    <button className='WaitingBtn'>웨이팅신청</button>
                </div>
            </div>
        </div>
    )
}

export default Information;
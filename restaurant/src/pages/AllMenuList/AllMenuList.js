import '../AllMenuList/AllMenuList.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import AllMenuListItem from '../../components/AllMenuListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const AllMenuList = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); //뒤로가기
    };


    return (
        <section className='AllMenuListMainContainer'>
            <Navbar />
            <div className="AllMenuLisPageLine" />
            <div className='AllMenuListTitleContainer'>
                <FontAwesomeIcon icon={faChevronLeft} className='chveronLeftIcon' onClick={handleBack} />
                <div className='AllMenuListTitle'>부천대학교 꿈집</div>
            </div>
            <div className='AllMenuListItemContainer'>
                <AllMenuListItem />
            </div>
        </section>
    )
}

export default AllMenuList;
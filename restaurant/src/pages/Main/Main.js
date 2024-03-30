import { useState } from 'react';
import '../Main/Main.css';
import DropDownArea from "../../dropdown/DropDownArea";
import Navbar from "../../navbar/Navbar"
import RestaurantList from '../../components/RestaurantList';
import NavbarSub from '../../navbar/NavbarSub';

const Main = () => {
  const [filter, setFilter] = useState('');

  const onChangeSearch = (search) => {
    setFilter(search);
  };

  return (
    <section className="mainPageContainer">
      <Navbar onSearch={onChangeSearch} />
      <div className="container-frame" />
      <div className="map-container">
        <img className="map-icon" alt="" src="/map-icon.png" />
        <DropDownArea />
      </div>
      <div className="container-frame" />
      <div className="mainFrame">
        <h2 className="h2">주변 맛집 다 모여라!</h2>
        <div className="waitingFastSort">
          <button className="rectangle-container">
            <div className="frame-inner" />
            <div className="div3">가까운 순</div>
          </button>
          <button className="rectangle-container">
            <div className="frame-inner" />
            <div className="div4">웨이팅 빠른 순</div>
          </button>
          <button className="rectangle-container">
            <div className="frame-inner" />
            <div className="div5">평점 높은 순</div>
          </button>
        </div>
      </div>
      <RestaurantList filter={filter} />
    </section>
  );
};

export default Main;
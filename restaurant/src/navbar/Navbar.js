import { useState } from 'react';
import '../navbar/Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const movePage = useNavigate();

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  function mainPage() {
    movePage('main');
  }

  return (
    <header className="group-nearby-fast">
      <div className="text-search-bar">

        <div className="vector-arrow" onClick={mainPage}>
          <img
            className="main-logo-img"
            loading="eager"
            alt=""
            src="/main-logo.png"
          />
          <div className="main-logo-text">페이팅</div>
        </div>

        <div className="search-parent">
          <img
            className="search-img"
            alt=""
            src="/magnifier.svg"
          />
          <input
            className="input-search"
            placeholder="지역, 음식, 매장명 검색"
            type="text"
            value={search}
            onChange={onChangeSearch}
          />
        </div>
        <div className="component-user-login">
          <div className="user-login-container">
            <a href="/main" rel="noopener noreferrer" className="login-link">로그인</a>
          </div>
          <div className="line-separator" />
          <div className="component-user-join">
            <div className="user-join-container">
              <a href="/main" rel="noopener noreferrer" className="join-link">회원가입</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

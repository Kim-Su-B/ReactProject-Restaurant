import { useState } from 'react';
import './NavbarSub.css';

const NavbarSub = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <header className="group-nearby-fast">
            <div className="component-frame-rect">
                <div className="text-search-bar">
                    <div className="main-logo-bar">
                        <div className="vector-arrow">
                            <img
                                className="main-logo-img"
                                loading="eager"
                                alt=""
                                src="/main-logo.png"
                            />
                            <div className="main-logo-text">페이팅</div>
                        </div>
                    </div>
                    <div className="search-parent">
                        <div className="search-child" />
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
                    <div className='user-group'>
                        <div className='test-group'>
                            <div className='logout-userName'>
                                <a href="/main" target="_blank" rel="noopener noreferrer" className="logoutBtn">
                                    <span className="user-logout-text">로그아웃</span>
                                </a>
                                <div className="line-separator" />
                                <a href="/main" target="_blank" rel="noopener noreferrer" className="userName">
                                    <span className="user-name-text">김수빈{'님'}</span>
                                </a>
                            </div>
                            <div className='icon-group'>
                                <img src='like.svg' className='like-icon' />
                                <img src='notification.svg' className='notification-icon' />
                                <img src='user.svg' className='user-icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavbarSub;
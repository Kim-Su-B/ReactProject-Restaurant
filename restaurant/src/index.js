import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import DetailedPageMain from './pages/DetailedPage/DatailedPageMain';
// import AllMenuList from './pages/MenuList/AllMenuList';
// import AllReviewList from './pages/AllReviewList/AllReviewList';

import Main from './pages/Main/Main';
import DetailedPageMain from './pages/DetailedPage/DatailedPageMain';
import AllMenuList from './pages/AllMenuList/AllMenuList';
import AllReviewList from './pages/AllReviewList/AllReviewList';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<DetailedPageMain />} />
          <Route path="/allMenuList" element={<AllMenuList />} />
          <Route path='/allReviewList' element={<AllReviewList />}/>
        </Routes>
      </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  root
);

import React from 'react';
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import './App.css';
import ReactGA from 'react-ga4';
import NewGame from './pages/NewGame';
import NotFound from './pages/errors/NotFound';

ReactGA.initialize('G-DXS3GSKWXX');

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>대충 로또</h1>
          <div className="button-group">
            <Link to="/" className="link-button">번호뽑기</Link>
            <a href="https://dhlottery.co.kr/gameResult.do?method=byWin"
               target="_blank"
               rel="noopener noreferrer"
               className="link-button">결과확인</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/new-game" />} />
            <Route path="/new-game" element={<NewGame/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

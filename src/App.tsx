import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import './App.css';
import ReactGA from 'react-ga4';
import NewGame from './pages/NewGame';

ReactGA.initialize('G-DXS3GSKWXX');

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>대충 로또 생성기</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/new-game" />} />
            <Route path="/new-game" element={<NewGame/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <>
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">페이지를 찾을 수 없습니다.</p>
      <p className="not-found-description">
        죄송합니다. 요청하신 페이지를 찾을 수 없습니다.<br />
        존재하지 않는 페이지이거나, 잘못된 URL로 접근하셨습니다.
      </p>
      <Link to="/" className="link-button">홈으로 돌아가기</Link>
    </>
  );
};

export default NotFound;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './child'; // 상대경로는 모두 src 앱에서 찾기

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App mag="전달" num="10" />
);

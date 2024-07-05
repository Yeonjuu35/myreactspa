import "bootstrap/dist/css/bootstrap.min.css"
// png, gif 같은 비트맵으로 된 것들은 경로 불러서 적용 가능
// svg xml은 태그 > 모듈이니까 import로 적용
// npm i sass / npm i node-sass(실전 노드 버전은 12-14버전)
// (버전에 따라 다르게 설치해야함 챗지피티 물어보기)
import './App.css';
import logo from './logo.svg'

const App = () => {
  // 함수는 이름이 겹치면 안되기 때문에 반드시 const로 생성
  return (
    <header id="hd" className="container">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className=" col-4 col-md-2">
          <a href="" className="d-block"><img src={logo} alt="로고" className=" w-100"/></a>
        </h1>
        <ul id="gnb" className="d-flex list-unstyled">
          <li><a href="" className="text-decoration-none text-dark">대메뉴</a></li>
          <li className="ps-2"><a href="" className="text-decoration-none text-dark">대메뉴</a></li>
          <li className="ps-2"><a href="" className="text-decoration-none text-dark">대메뉴</a></li>
          <li className="ps-2"><a href="" className="text-decoration-none text-dark">대메뉴</a></li>
        </ul>
      </div>
    </header>
  );
}

export default App;

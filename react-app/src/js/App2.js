import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
        //BrowserRouter : HTML에서 라우팅 처리하는데 사용
            //라우팅 : 다른 페이지간의 전환이나 네비게이션을 관리하는 것
            //렌더링 : 컴퓨터 프로그램에서 데이터나 그래픽을 화면에 나타내는 과정
        //Route : URL 경로에 따라 특정 컴포넌트(function)을 렌더링하는데 사용
        //Routes : 여러개 Route를 그룹으로 만들고 관리하는데 사용
        //Link : 클릭 가능한 링크를 생성하는데 사용
import Blog from './Blog';
import About from './About';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">소개</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path='/' element={<Blog />} />
                    <Route path='/about' element={<About/>} />
                </Routes>
            </div>
        </Router>
    )
}
export default App;
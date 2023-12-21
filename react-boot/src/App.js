import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div>
      <header className='App-Header'>
        <h1>React Bootstrap Site</h1>
      </header>
      {/*
        container : 본문을 담을 컨테이너를 생성
        mt-4 : margin-top 을 4단위로 설정
        row : 컬럼을 나열
        col-md-6 : 
          column을 medium(중간화면크기) 6개의 컬럼을 차지
          1줄의 row는 12개 column으로 구성
      */}
      <main className='container mt-4'>

        <div className='row'>
          <div className='col-md-4'>
            <h2 className='text-center'>1행 1열</h2>
            <p>하나요</p>
          </div>
          <div className='col-md-4'>
            <h2 className='text-center'>1행 2열</h2>
            <p>둘이요</p>
          </div>
          <div className='col-md-4'>
            <h2 className='text-center'>1행 3열</h2>
            <p>셋이요</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <h2 className='text-center'>2행 1열</h2>
            <p>하나요</p>
          </div>
          <div className='col-md-4'>
            <h2 className='text-center'>2행 2열</h2>
            <p>둘이요</p>
          </div>
          <div className='col-md-4'>
            <h2 className='text-center'>2행 3열</h2>
            <p>셋이요</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <h2 className='text-center'>3행 1열</h2>
            <p>하나요</p>
          </div>
          <div className='col-md-4'>
            <h2 className='text-center'>3행 2열</h2>
            <p>둘이요</p>
          </div>
          <div className='col-md-4'>
            <h2 className='text-center'>3행 3열</h2>
            <p>셋이요</p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;

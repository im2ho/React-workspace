import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import image from './img/제과제빵점.jpeg';

function App() {
  return (
    <div>
      <header className='bg-dark text-warning p-5'>
        <h1><b>React Bootstrap Gallery</b></h1>
      </header>
      <main className='container mt-4'>

        <section className='mb-5 text-light'>
          <div className='row'>
            <div className='col-md-4  text-center'>
              <img className='img-fluid' src={image}></img>
            </div>
            <div className='col-md-8 p-3 bg-dark'>
              <h2 className='text-warning'>About</h2>
              <p className='text-light'>
                이 작품은 제출하고나니 빵점인 대학생의 과제를 해학적으로 풀어냈습니다. <br />
                물론 당사자성 발언입니다.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-center mb-4'>Contact Us</h2>
          <form>
            <div className='mb-3'>
              <label className='form-label'>
                Name
              </label>
              <input type='text' className='form-control' id='name'/>
            </div>

            <div className='mb-3'>
              <label className='form-label'>
                E-mail
              </label>
              <input 
                type="email" className='form-control'
                aria-describedby='emailSmall'
              />
              <small id="emailSmall" className='form-text text-muted'>이메일</small>
            </div>

            <div className='mb-3'>
              <label className='form-label'>
                Message
              </label>
              <textarea rows='4' className='form-control' />
            </div>
            <button className='btn btn-primary float-end mb-3'>Send</button>
          </form>
        </section>

        <div className='mb-5'>
          <h2 className='mb-4'>Card Section</h2>
          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>Card1</h5>
                  <p className='card-text'>BC카드</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>Card2</h5>
                  <p className='card-text'>현대카드</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>Card3</h5>
                  <p className='card-text'>우리카드</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <footer className='bg-dark text-light text-center py-5'>
        <p>&copy; 2023 My React Site</p>
      </footer>
    </div>

  );
}

export default App;

import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Header from "./js/Construction/Header";
import Home from "./js/Construction/Home";
import Footer from "./js/Construction/Footer";

import Movie from "./js/MovieList";
import Blog from "./js/Blog";
import NumberGuessingGame from "./js/Game/NumberGuessing";
import Quiz from "./js/Game/Quiz"; 
import Todo from "./js/TodoList";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movie/>} />
            <Route path='/game/numberguessing' element={<NumberGuessingGame />} />
            <Route path='/game/quiz' element={<Quiz />} />
            <Route path='/todos' element={<Todo />} />
            <Route path='/blogs' element={<Blog />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
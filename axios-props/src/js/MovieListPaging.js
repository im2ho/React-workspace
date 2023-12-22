import React,{useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Pagination} from 'react-bootstrap';
//부모
import axios from "axios";

const MovieList = () => {
    
    const [movies, setMovies] = useState([]);
    //현재 페이지
    const[currentPage, setCurrentPage] = useState(1);
    //한 페이지당 보여줄 영화 수
    const [moviesPerPage] = useState(5);
    
    //외부에서 API를 통해서 영화 데이터를 가져오고, 원하는 내용만 보여주고 싶을 때
    //then에 원하는 내용만 가져올 수 있도록 요청

    //현재 페이지에서 영화 목록 계산
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexFirstMovie, indexOfLastMovie);

    //페이지를 변경하기 위한 핸들러 추가
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json')
            .then(response => {
                //필요한 정보만 가져와서 업데이트
                const movieData = response.data.data.movies.map(movie => ({
                    id: movie.id,
                    title : movie.title,
                    rating : movie.rating,
                    poster : movie.medium_cover_image
                }));
                setMovies(movieData);
            })
            .catch(error=> {
                console.log('데이터 없음', error);
            });
            },[]);

    return (
        <div>
            {currentMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            <Pagination>
                {[...Array(Math.ceil(movies.length / moviesPerPage)).keys()].map((number) => (
                    <Pagination.Item key={number + 1}
                        active={number + 1 === currentPage}
                        onClick={()=> handlePageChange(number+1)}
                    >{number+1}</Pagination.Item>
                ))}
            </Pagination>
        </div>
    )
} 

export default MovieList;
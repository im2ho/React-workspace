import React,{useState, useEffect} from "react";
import {required, minLength} from "react-admin";
import{register} from "react-hook-form";
import '../css/Board.css';
import muiMaterial from '@mui/material';



function Board() {
    
    const validation = [required(), minLength(2)];

    //만약 로컬 스토리지에 저장된 게시글이 존재하면, 로컬 스토리지에서 게시글 데이터를 불러오기
    //저장된 게시글 X > 빈 배열 []
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    
    //게시글 목록 관리
    //위에서 이미 []을 설정했기 때문에, useState에 빈 배열을 할당할 필요 X
    const [posts, setPosts] = useState(savedPosts);
    
    //새로운 게시글 입력받기
    const [newPost, setNewPost] = useState('');

    //페이지가 실행(로딩)될 때나, 게시글이 업데이트 될 때마다 localStorage에 작성한 게시글을 저장
    //JSON.stringify : 자바스크립트 객체나 배열을 JSON 문자열로 변환하는 함수
    //[posts] 게시글 목록에 어떤 변화가 생길 때마다 갱신된 최신 데이터가 저장
    useEffect(() => {
        localStorage.setItem('posts',JSON.stringify(posts));
    },[posts]);

    //게시글 추가 함수
    const addPost=() => {
        
            setPosts([...posts, newPost]);
            setNewPost('');

            //입력된 게시글을 localStorage에 저장
            //localStorage 밑에 Item과 setItem 존재
            //'posts' 키에 현재 게시글 목록과 새로운 게시글을 추가한 배열을 JSON 문자열로 변환해서 저장
            localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
        
    }

    //게시글 삭제
    const removePost = (index) => {
        const updatePosts = [...posts];
        updatePosts.splice(index,1);
        setPosts(updatePosts);
        localStorage.setItem('posts',JSON.stringify([...posts, updatePosts]));
    }
    //todoList 할 일 목록 유지할 수 있도록 추가해주기

    return(
        <div className="contentbox">
            <div className="textbox">
            <h1>고객의 소리</h1>
                <textarea
                    rows="5"
                    cols="50"
                    placeholder="게시글을 입력하세요"
                    value={newPost}
                    minlength={10}
                    onChange={(e)=>setNewPost(e.target.value)}
                /><br />
                <button onClick={addPost}>등록</button>
            
            <ul>
                {posts.map((post,index)=>(
                    <li key={index}>
                        {post}
                        <button onClick={()=> removePost(index)}>삭제</button>
                    </li>
                ))}
            </ul>
            </div>
            <div>
                <h1>게시글 목록</h1>
                <ul>
                    {posts.map((post, index) =>(
                        <li key={index}>{post}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Board;
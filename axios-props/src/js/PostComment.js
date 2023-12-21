import React,{useState, useEffect} from "react";
import axios from "axios";

//여러 개의 API를 사용하는 경우

const PostComment = () => {

    const [userData, setUserData] = useState([]);
    const [posts, setPosts] = useState([]);
    const [postComments, setPostComments]= useState([]);

    //API를 두 개 이상 가져올 경우
    useEffect(()=>{
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/comments')
        ])
        //데이터를 성공적으로 가져왔을 때
            //axios.spread : 여러 응답을 개별 응답으로 나눠서 제공된 set 함수에 전달
        .then(axios.spread((usersResponse, postsResponse ,commentsResponse) => {
            setUserData(usersResponse.data);
            setPosts(postsResponse.data);
            setPostComments(commentsResponse.data);
        }))
        .catch(err => console.error(err));
        console.log("데이터를 가져오나요?"); //네 너무요...
    }, []);


    return(
        <div>
            <h2>User 정보</h2>
            {userData.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
            <h2>게시글</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
            <h2>게시물 댓글</h2>
            {postComments.map(comment => (
                <p key={comment.id}>{comment.body}</p>
            ))}
        </div>
    );
}

export default PostComment;
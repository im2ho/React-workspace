import React, {useState,useEffect} from "react";
import PostTitle from "./PostTitle";

import axios from "axios";

const PostAPI = () => {
    
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const postData = response.data;
                setPosts(postData);
            })
            .catch(error => {
                console.log('데이터 없음', error);
            });
        },[]);

    return(
        <div>
            {posts.map(item=>
                (<p key={item.id}>{item.title}<br />{item.body}</p>)
                )}
        </div>
    )
}

export default PostAPI;
import React, {useState,useEffect} from "react";
import PostTitle from "./PostTitle";

import axios from "axios";

const PostAPI = () => {
    
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response => {
            const postData = response.data.map(posted => ({
                id: posted.id,
                title : posted.title,
                body : posted.body
            }));
            setPosts(postData);
           })
           .catch(error => {
                console.log('데이터없음', error);
           });
        },[]);

    return(
        <div>
            {posts.map(item=>
                (
                    <PostTitle key={item.id} posted={item} />
                ))}
        </div>
    )
}

export default PostAPI;
import React from "react";

const Blog = () => {
    const posts = [
        {id:1, title:'나의 개쩌는 블로그', content:'블로그입니다'},
        {id:2, title:'2번 게시물인데', content:'내용은없어요'}
        ];
    return(
        <div>
            {posts.map(post=>(
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}

export default Blog;
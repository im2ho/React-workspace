import React from "react";

const About = () => {
    const posts = [
        {id:1, title:'나의 개쩌는 블로그', content:'블로그입니다'}
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

export default About;
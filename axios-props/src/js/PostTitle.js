import React from "react";

const PostTitle = ({posted}) => {
    return(
        <div>
            <h3>{posted.title}</h3>
            <p>내용: {posted.body}</p>
        </div>
    );
};

export default PostTitle;
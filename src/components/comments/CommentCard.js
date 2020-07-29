import React from "react";
import "./Comment.css";

const CommentCard = props => {
    
    const userId = JSON.parse(sessionStorage.getItem("credentials"));
    return(
       
        <div className="comment-box">
        <div className="comment">
            <div className="comment-content">
                <span className="card-comment">{props.comment.comment}</span>
                
                {props.comment.userId === userId ? 
                <button className="alignRight"
                type="button" id={`commentEdit${props.comment.id}`}
               
                 onClick={() => props.history.push(`/comments/${props.comment.id}/edit`)}>
                 Edit
                </button> : null
                 } 
            </div>
        </div>
        </div>
    
    )
}

export default CommentCard
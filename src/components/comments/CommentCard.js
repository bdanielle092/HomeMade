import React from "react";
import "./Comment.css";

const CommentCard = props => {
    
  
    return(
       
        <div className="comment-box">
        <div className="comment">
            <div className="comment-content">
                <span className="card-comment">{props.comment.comment}</span>
                
                
                <button className="alignRight"
                type="button" id={`commentEdit${props.comment.id}`}
               
                 onClick={() => props.history.push(`/comments/${props.comment.id}/edit`)}>
                 Edit
                </button> 
                
            </div>
        </div>
        </div>
    
    )
}

export default CommentCard
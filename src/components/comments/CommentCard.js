import React from "react";
import "./Comment.css";

const CommentCard = props => {
    
    return(
        <div className="card">
            <div className="card-content">
                <span className="card-comment">{props.comment.comment}</span>
                <button 
                type="button"
                 onClick={() => props.history.push(`/comments/${props.comment.id}/edit`)}>
                 Edit
                </button>
            </div>
        </div>
    )
}

export default CommentCard
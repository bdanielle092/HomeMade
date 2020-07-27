import React from "react";

const CommentCard = props => {
    return(
        <div className="card">
            <div className="card-content">
                <span className="card-comment">{props.comment.comment}</span>
            </div>
        </div>
    )
}

export default CommentCard
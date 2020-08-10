import React from "react";
import "./Comment.css";

const CommentCard = props => {

    // if you are the current user you can edit, else you can only view the comment
   const currentUserId = parseInt(sessionStorage.getItem("credentails"))
   if(props.comment.userId === currentUserId){
    return(
       
        <div className="comment-box">
        <div className="comment">
            <div className="comment-content">
                 <span className="card-username">{props.comment.user.username}: </span>
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
   }else {
       return (
           <div className="comment-box">
               <div className="comment">
                   <div className="comment-content">
                   <span className="card-username">{props.comment.user.username}: </span>
                       <span className="card-comment">{props.comment.comment}</span>
                   </div>
               </div>
           </div>
       )
   }
    
}

export default CommentCard
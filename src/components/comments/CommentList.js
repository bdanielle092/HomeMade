import React, {useState, useEffect} from "react";
import CommentCard from "./CommentCard";
import CommentManager from "../../modules/CommentManager";

const CommentList = (props) => {
    const [comments, setComments] = useState([])

    
    const getComments = () => {
        
        return CommentManager.getAll().then(commentsFromAPI => {
            setComments(commentsFromAPI)
        });
    };

    useEffect(() => {
        getComments();
    }, []);
    
    return (
        <>
         <section className="section-content">
            <button type="button"
            className="btn"
            onClick={() => {props.history.push("/comments/new")}}>
            Add Comment
            </button>
        </section>
        <div className="container-card">
            {comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
        </div>
         </>
    );
};

export default CommentList
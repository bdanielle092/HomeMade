import React, {useState, useEffect} from "react";
import CommentManager from "../../modules/CommentManager";


const CommentEditForm = props => {
    const [comment, setComment] = useState({comment: "", userId: "", postedId: parseInt(sessionStorage.getItem("credentails"))});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = {...comment};
        stateToChange[evt.target.id] = evt.target.value;
        setComment(stateToChange);
    };

    const updateExistingComment = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedComment = {
            id: props.match.params.commentId,
            comment: comment.comment,
            userId: comment.userId,
            postedId: comment.postedId
        };

        CommentManager.update(editedComment)
        .then(() => props.history.push("/Dashboard"))
    }

    useEffect(() => {
        CommentManager.get(props.match.params.commentId)
        .then(comment => {
            setComment(comment);
            setIsLoading(false)
        });
    }, [props.match.params.commentId]);

    return(
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="comment"
                    value={comment.comment}
                    />
                    <label htmlFor="comment">Comment</label>

                    <input 
                    type="hidden"
                    required
                    id="userId"
                    value={comment.userId}
                    />

                    <div className="alignRight">
                        <button
                        type="button" disabled={isLoading}
                        onClick={updateExistingComment}
                        className="btn btn-primary"
                        >Submit</button>
                    </div>
                </div>
            </fieldset>
        </form>
        </>
    );
}

export default CommentEditForm
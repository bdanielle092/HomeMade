import React, {useState} from "react";
import CommentManager from "../../modules/CommentManager";


const CommentForm = props => {
    const userId = JSON.parse(sessionStorage.getItem("credentials"));
    const [comment, setComment] = useState({userId: userId, comment: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = {...comment}
        stateToChange[evt.target.id] = evt.target.value;
        setComment(stateToChange);
    };

    const constructNewComment = evt => {
        evt.preventDefault();
        if(comment.comment === ""){
            window.alert("Please add a comment")
        }else {
            setIsLoading(true);
            CommentManager.post(comment)
            .then(() => props.history.push ("/Dashboard"))
        }
    };

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input 
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="comment"
                    placeholder="enter comment" 
                    />
                    <label htmlFor="comment">Comment</label>
                    </div>
                    <div className="alignRight">
                        <button 
                        type="button"
                        disabled={isLoading}
                        onClick={constructNewComment}
                        >Submit</button>
                    </div>
            </fieldset>
        </form>
        </>
    )
}

export default CommentForm
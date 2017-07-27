import React, { PropTypes } from 'react';
import Comment from './Comment'


const CommentList = ({ comments=[], onRemove=f=>f }) =>
    <div className="comment-list">
        {(comments.length === 0) ?
            <p>No Comment Listed. (Add a Comment)</p> :
            comments.map(comment =>
                <Comment key={comment.id}
                       {...comment}
                       onRemove={() => onRemove(comment.id)} />
            )
        }
    </div>

CommentList.propTypes = {
    comments: PropTypes.array,
    onRemove: PropTypes.func
}

export default CommentList
import React, { PropTypes } from 'react';



const Comment = ({ title, comment, onRemove=f=>f }) =>
    <section className="comment">
        <h1>{title}</h1>
        <h3>{comment}</h3>
        <button onClick={onRemove}>X</button>
        
      
    </section>

Comment.propTypes = {
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    onRemove: PropTypes.func
}

export default Comment



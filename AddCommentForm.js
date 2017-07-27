import React, { PropTypes, Component } from 'react';


const AddCommentForm = ({onNewComment=f=>f}) => {

    let _title, _comment

    const submit = e => {
        e.preventDefault()
        onNewComment(_title.value, _comment.value)
        _title.value = ''
        _comment.value = ''
        _title.focus()
    }

    return (
        <form className="add-comment" onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="comment title..." required/>
            <input ref={input => _comment = input}
                   type="text" placeholder="comments..." required/>
            <button>ADD</button>
        </form>
    )

}

AddCommentForm.propTypes = {
    onNewComment: PropTypes.func
}

export default AddCommentForm
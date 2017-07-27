import React, { Component } from 'react';
import { v4 } from 'uuid'
import AddCommentForm from './AddCommentForm'
import CommentList from './CommentList'


export default class CommentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
        this.addComment = this.addComment.bind(this)
        this.removeComment = this.removeComment.bind(this)
    }

    addComment(title, comment) {
        const comments = [
            ...this.state.comments,
            {
                id: v4(),
                title,
                comment
                
            }
        ]
        this.setState({comments})
    }

    

    removeComment(id) {
        const comments = this.state.comments.filter(comment => comment.id !== id)
        this.setState({comments})
    }

    render() {
        const { addComment, removeComment } = this
        const { comments } = this.state
        return (
            <div className="app">
                <AddCommentForm onNewComment={addComment} />
                <CommentList comments={comments}
                           onRemove={removeComment} />
            </div>
        )
    }

}

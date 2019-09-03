import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import withTimer from "../c06/withTimer"
import "./CommentBox.css"


const comments = [
  { id: 0, author: "Nate",  content: "Hello React! This is a sample comment." },
  { id: 1, author: "Kevin", content: "Hello Redux!" },
  { id: 2, author: "Bood",  content: "Hello Rekit!" },
]


class Comment extends PureComponent {
  static propTypes = {
    comment: PropTypes.object.isRequired,
  }

  render() {
    const { author, content } = this.props.comment
    return (
      <div className="comment-item">
        <span className="avatar" />
        <a href="#">{author}</a>
        <p>{content}</p>
      </div>
    )
  }
}


class CommentList extends PureComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className="comment-list">
        {this.props.comments.map((comment, i) => <Comment key={comment.id} comment={comment} />)}
      </div>
    )
  }
}



class CommentForm extends PureComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit}>
          <textarea style={{ display: "block", width: "100%" }} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


class CommentBox extends React.PureComponent {
  render() {
    return (
      <div className="comment-box">
        <h1>Comments ({comments.length})</h1>
        <CommentList comments={comments} />
        <CommentForm comments={comments} />
        {this.props.time.getTime()}
      </div>
    )
  }
}

export default withTimer(CommentBox)


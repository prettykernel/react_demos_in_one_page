import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import withTimer from "./c06/withTimer"
import "./CommentBox.css"

const comments = [
  { id: 0, author: "Nate",  content: "Hello React! This is a sample comment." },
  { id: 1, author: "Kevin", content: "Hello Redux!" },
  { id: 2, author: "Bood",  content: "Hello Rekit!" },
]

const CommentsContext = React.createContext()


class Comment extends PureComponent {
  static propTypes = {
    comment: PropTypes.object.isRequired,
  }

  render() {
    const { author, content } = this.props.comment
    return (
      <div className="comment-item">
        <span className="avatar" />
        <a href="https://github.com/prettykernel">{author}</a>
        <p>{content}</p>
      </div>
    )
  }
}


class CommentList extends PureComponent {
  static contextType = CommentsContext

  render() {
    return (
      <div className="comment-list">
        {this.context.map((comment, i) => <Comment key={comment.id} comment={comment} />)}
      </div>
    )
  }
}
/*
等价于：
class CommentList extends PureComponent {
  render() {
    return (
      <div className="comment-list">
        <CommentsContext.Consumer>
          {context => context.map((comment, i) => <Comment key={comment.id} comment={comment} />)}
        </CommentsContext.Consumer>
      </div>
    )
  }
}
*/


class CommentForm extends PureComponent {
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
      <CommentsContext.Provider value={comments}>
        <div className="comment-box">
          <h1>Comments ({this.context.length})</h1>
          <CommentList />
          <CommentForm />
          {this.props.time.getTime()}
        </div>
      </CommentsContext.Provider>
    )
  }
}

export default withTimer(CommentBox)


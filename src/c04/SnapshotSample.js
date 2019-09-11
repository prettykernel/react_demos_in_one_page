import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SnapshotSample.css";

export default class SnapshotSample extends PureComponent {
  state = {
    messages: []
  };

  handleNewMessage() {
    this.setState(prev => ({
      messages: [
        `msg ${prev.messages.length}`,
        ...prev.messages
      ]
    }));
  }

  componentDidMount() {
    for (let i = 0; i < 20; i++) this.handleNewMessage();
    this.interval = window.setInterval(() => {
      if (this.state.messages.length > 200) {
        window.clearInterval(this.interval);
        return;
      }
      this.handleNewMessage();
    }, 100);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  // 移动滚轮后，保持内容不动
  // 默认可视区内容会不断重绘。注释掉 getSnapshotBeforeUpdate 和 componentDidUpdate 即可看到效果
  getSnapshotBeforeUpdate() {
    return this.rootNode.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, prevScrollHeight) {
    const scrollTop = this.rootNode.scrollTop;
    if (scrollTop < 5) return;
    this.rootNode.scrollTop =
      scrollTop +
      (this.rootNode.scrollHeight - prevScrollHeight);
    console.log(this.rootNode.scrollTop)
  }

  render() {
    return (
      <div
        className="snapshot-sample"
        ref={n => (this.rootNode = n)}
      >
        {this.state.messages.map((msg, i) => <div key={i}>{msg}</div>)}
      </div>
    );
  }
}






/*

import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import "./SnapshotSample.css"

export default class SnapshotSample extends PureComponent {
  interval = null

  state = {
    messages: [],
  }

  handleNewMessage() {
    this.setState(prev => ({
      messages: [`msg ${prev.messages.length}`, ...prev.messages,]
    }))
  }

  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      this.handleNewMessage()
    }
    this.interval = setInterval(() => {
      if (this.state.messages.length > 50) {
        window.clearInterval(this.interval)
      } else {
        this.handleNewMessage()
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getSnapshotBeforeUpdate() {
    return this.rootNode.scrollHeight
  }

  componentDidUpdate(prevProps, prevState, prevScrollHeight) {
    // this 指 SnapshotSample 组件的实例，SnapshotSample
    // this.rootNode 即 div.snapshot-sample
    // console.log(this, this.rootNode.scrollTop)
    const scrollTop = this.rootNode.scrollTop
    if (scrollTop >= 5) {
      this.rootNode.scrollTop = scrollTop + (this.rootNode.scrollHeight - prevScrollHeight)
    }
  }

  render() {
    return (
      <div className="snapshot-sample" ref={n => (this.rootNode = n)}>
        {this.state.messages.map((msg, i) => <div key={i}>{msg}</div>)}
      </div>
    )
  }
}


*/












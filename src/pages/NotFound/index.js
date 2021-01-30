import React, { Component } from 'react'

// 引入NotFound组件自己的样式文件
import './index.scss'

class NotFound extends Component {
  render() {
    return <div className="notFound">亲，你要找的页面走丢了！</div>
  }
}

export default NotFound

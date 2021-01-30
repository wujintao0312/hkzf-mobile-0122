import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// 引入字体图标对应的样式文件
import './assets/fonts/iconfont.css'

// 引入antd-mobile组件库对应的样式文件
import 'antd-mobile/dist/antd-mobile.less'

// 引入项目自身样式文件
import './index.scss'

ReactDOM.render(<App/>, document.getElementById('root'))
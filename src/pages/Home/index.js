import React, { Component } from 'react'

// 引入react-router-dom包，完成Home组件中二级路由的配置
import { NavLink, Route, Switch } from 'react-router-dom'

// 引入二级路由对应的组件
import Index from './Index/index'
import FindHouse from './FindHouse'
import News from './News'
import Profile from './Profile'
// 二级路由这里也配置一个404,匹配不到任何一个路由规则时展示
import NotFound from '../NotFound'

// 引入Home组件对应的样式文件
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* 配置嵌套路由路由规则 */}
        <Switch>
          <Route exact path="/home" component={Index}></Route>
          <Route path="/home/findHouse" component={FindHouse}></Route>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/profile" component={Profile}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        {/* 声明式路由链接 */}
        <ul className="navbar">
          <li>
            <NavLink exact to="/home">首页</NavLink>
          </li>
          <li>
            <NavLink to="/home/findHouse">找房</NavLink>
          </li>
          <li>
            <NavLink to="/home/news">资讯</NavLink>
          </li>
          <li>
            <NavLink to="/home/profile">我的</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home

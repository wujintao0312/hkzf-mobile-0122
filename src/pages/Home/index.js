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
import './index.scss'

class Home extends Component {
  renderNavBar = () => {
    // 提取公共数据，优化底部导航栏，增加项目可维护性
    const navBars = [
      {
        path: '/home',
        styleName: 'iconfont icon-ind',
        name: '首页'
      },
      {
        path: '/home/findHouse',
        styleName: 'iconfont icon-findHouse',
        name: '找房'
      },
      {
        path: '/home/news',
        styleName: 'iconfont icon-infom',
        name: '资讯'
      },
      {
        path: '/home/profile',
        styleName: 'iconfont icon-my',
        name: '我的'
      }
    ]
    return (
      <ul className="navbar">
          {
            navBars.map((item) => {
              return (
                <li key={item.name}>
                  <NavLink exact to={item.path}>
                    <i className={item.styleName}></i>
                    <p>{item.name}</p>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
    )
  }
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
        {this.renderNavBar()}
      </div>
    )
  }
}

export default Home

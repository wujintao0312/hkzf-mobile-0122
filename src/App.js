// 准备根组件
import React, { Component } from 'react'

// 用react-router-dom使得整个应用成为一个单页面应用
// react-router-dom这个库提供的是路由配置相关的*组件*
import { HashRouter as Router, NavLink, Route, Switch, Redirect } from 'react-router-dom'

// 引入App组件的样式文件
import './index.css'

// 引入Home/Map/House这三个页面级别的组件
import Home from './pages/Home'
import Map from './pages/Map'
import House from './pages/House'
// 路由匹配失败时404页面
// Switch组件的作用就是从上到下只匹配一个Route，一旦匹配得上，就不再向下匹配了
import NotFound from './pages/NotFound'

class App extends Component {
  render() {
    return <Router>
      <div className="app">
        {/* 配置路由规则 */}
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/map" component={Map}></Route>
          <Route exact path="/house" component={House}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        {/* 声明式的路由链接 */}
        <ul className="navbar">
          <li><NavLink to="/home">首页</NavLink></li>
          <li><NavLink to="/map">地图找房</NavLink></li>
          <li><NavLink to="/house">条件找房</NavLink></li>
        </ul>
      </div>
    </Router>
  }
}

export default App
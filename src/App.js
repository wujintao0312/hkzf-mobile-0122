// 准备根组件
import React, { Component } from 'react'

// 用react-router-dom使得整个应用成为一个单页面应用
// react-router-dom这个库提供的是路由配置相关的*组件*
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

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
          {/* <Redirect exact from="/" to="/home/index"></Redirect> */}
          {/* <Route path="/home" component={Home}></Route> */}
          <Route path="/home" component={Home}></Route>
          <Route path="/map" component={Map}></Route>
          <Route path="/house" component={House}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        {/* 声明式的路由链接 */}
        {/* <ul className="navbar">
          <li><NavLink to="/home">首页</NavLink></li>
          <li><NavLink to="/map">地图找房</NavLink></li>
          <li><NavLink to="/house">条件找房</NavLink></li>
        </ul> */}
        {/* 备注：一级路由这里只要配置好相应的路由规则就行，主要是将匹配好的路由继续向下传递，为二级路由配置做好准备 */}
      </div>
    </Router>
  }
}

export default App
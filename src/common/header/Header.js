import React, { Component } from 'react'
import './header.scss'

export default class Header extends Component {
  render() {
    return (
      <header className="headerBackground">
        <i className="iconfont icon-vue"></i>
        <i className="iconfont icon-react"></i>
      </header>
    )
  }
}

import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import './footer.scss'

export class Footer extends Component {

  render() {
    const footerNavbarLists = [
      { name: '话题', router: '/home', iconCla: 'icon-home2' },
      // { name: '未读信息', router: '/comment', iconCla: 'icon-huifu' },
      { name: '我的', router: '/login', iconCla: 'icon-wode' },
    ]
    return (
      <footer className="footer flex">
        {
          footerNavbarLists.map((item, index) => {
            return (
              <NavLink key={index} to={item.router} className="flex item">
                <i className={"iconfont " + item.iconCla}></i>
                {item.name}
              </NavLink>
            )
          })
        }
      </footer>
    )
  }
}

export default Footer

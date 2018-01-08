import React, { Component } from 'react';
import { getShowDataLists } from '../../api/home'
import { NavLink } from "react-router-dom"
import './home.scss';

export class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      navabrLists: [
        { name: '全部', val: 'all' },
        { name: '精华', val: 'good' },
        { name: 'weex', val: 'weex' },
        { name: '分享', val: 'share' },
        { name: '问答', val: 'ask' },
        { name: '招聘', val: 'job' }
      ],
      options: {
        tab: this.props.currentTab,
        page: 0,
        limit: 20
      }
    }
  }

  componentWillMount () {
    this.props.changeShowCommon(true)
  }

  componentDidMount () {
    this.getData('get', 'https://www.vue-js.com/api/v1/topics?')
  }

  getData (type, url) {
    this.props.changeLoading(true)
    getShowDataLists(type, url, this.state.options)
    .then((res) => {
      this.props.saveShowData(res.data)
      this.props.changeLoading(false)
    })
  }

  async changeTab(val, index) {
    await this.props.changeTab(val)
    let obj = {
      tab: val
    }
    this.setState({ options: Object.assign(this.state.options, obj) })
    await this.getData('get', 'https://www.vue-js.com/api/v1/topics?')
  }

  render() {
    return (
      <section>
        <ul className="navbar flex">
          {
            this.state.navabrLists.map((item, index) => {
              return (
                <li className={ "item flex " + (this.state.options.tab === item.val ? 'active' : '') } key={index} onClick={this.changeTab.bind(this, item.val, index)}>
                {item.name}
                </li>
              )
            })
          }
        </ul>
        <ul className="content">
          {
            this.props.showDataLists.map((item, index) => {
              return (
                <li key={index} className="content_li">
                  <NavLink to={`newsDetails/${item.id}`}>
                    {item.top ? <i className="iconfont top icon-re"></i> : null}
                    <div className="content_li_header flex">
                      <div className="author_logo">
                          <img src={item.author.avatar_url} alt=""/>
                      </div>
                      <div className="title">{item.title}</div>
                      <div className="type">{item.tab}</div>                    
                    </div>
                    <div className="content_li_footer flex">
                      <div className="footer_left flex">
                        <div className="author_name">{item.author.loginname}</div>
                        <div className="time">{item.last_reply_at}</div>
                      </div>
                      <div className="footer_right flex">
                        <i className="iconfont icon-chakan"></i><span>{item.visit_count}</span>
                        <i className="iconfont icon-pinglun"></i><span>{item.reply_count || 0}</span>
                      </div>
                    </div>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

export default Home

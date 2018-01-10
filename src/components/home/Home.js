import React, { Component } from 'react';
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
      currentPage: 1
    }
  }

  componentWillMount () {
    // document.getElementById('content').addEventListener('scroll', this.winscroll.bind(this))
    this.props.changeShowCommon(true)
  }

  componentDidMount () {
    let options = {
      tab: this.props.currentTab,
      page: this.state.currentPage,
      limit: 20
    }
    this.props.saveShowData(options)
  }

  contentScroll () {
    let [scrollHeight, scrollTop, clientHeight] = [this.refs.contentUl.scrollHeight, this.refs.contentUl.scrollTop, this.refs.contentUl.clientHeight]
    if (scrollHeight === scrollTop + clientHeight) {
      this.setState({currentPage: this.state.currentPage++})
      let options = {
        tab: this.props.currentTab,
        page: this.state.currentPage,
        limit: 20
      }
      this.props.pushShowData(options)
    } else {
      return
    }
  }

  async changeTab(val, index) {
    await this.props.changeTab(val)
    this.setState({currentPage: 1})
    this.refs.contentUl.scrollTop = 0
    let options = {
      tab: val,
      page: this.state.currentPage,
      limit: 20
    }
    await this.props.saveShowData(options)
  }

  render() {
    return (
      <section>
        <ul className="navbar flex">
          {
            this.state.navabrLists.map((item, index) => {
              return (
                <li className={ "item flex " + (this.props.currentTab === item.val ? 'active' : '') } key={index} onClick={this.changeTab.bind(this, item.val, index)}>
                {item.name}
                </li>
              )
            })
          }
        </ul>
        <ul className="content" id="content" onScroll={!this.props.isToEnd && !this.props.showScrollLoading ? this.contentScroll.bind(this) : null} ref="contentUl">
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
          {
            this.props.isToEnd ? <p style={{textAlign: 'center'}}>别刷新了，我已经到底了...</p> : null
          }
        </ul>
        {
          this.props.showScrollLoading ? <p className="scrollLoading flex"><i className="iconfont icon-loading"></i><span>加载中...</span></p> : null
        }
      </section>
    )
  }
}

export default Home

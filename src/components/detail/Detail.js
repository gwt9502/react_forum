import React, { Component } from 'react'
import './detail.scss'

export default class Detail extends Component {
  constructor(){
    super()
    this.state = {
      showComment: false
    }
  }

  componentWillMount () {
    this.props.changeShowCommon(false)
  }

  componentDidMount () {
    this.props.saveCurrentNewsDetails(this.props.match.params.id)
    // this.props.changeLoading(true)
    // fetch('get', `https://www.vue-js.com/api/v1/topic/${}`)
    // .then(async (res) => {
    //   await (res.data)
    //   this.props.changeLoading(false)
    // })
  }

  toggle (e) {
    e.stopPropagation()
    this.setState({
      showComment: !this.state.showComment
    })
  }

  showCommentHtml (newDetail) {
    let replyContent = (content) => { return {__html: content} }
    return (
      <div className="commentContainer flex" ref="toggleReply">
        <div className="commentTitle">{`${newDetail.reply_count}条评论`}</div>
        <div className="replayContainer">
          {
            newDetail.replies.map((item, index) => {
              return (
                <div key={index} className="item">
                  <div className="itemLogo">
                    <img src={item.author.avatar_url} alt="暂无"/>
                  </div>
                  <div className="itemRight">
                    <p className="authorName">{item.author.loginname}</p>
                    <p className="replyDate">{item.create_at.slice(0,10)}</p>
                    <p className="replyContent" dangerouslySetInnerHTML={replyContent(item.content)}></p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="detailFooter flex">
          <div className="detailLeft">
            <i className="iconfont icon-fanhui" onClick={(e) => this.toggle(e)}></i>
          </div>
          <div className="detailInput">说点什么吧</div>
        </div>
      </div>
    )
  }

  render() {
    let newDetail = this.props.currentNewsDetails
    let innerHTML = () => { return {__html: newDetail.content} }
    return (
      <div className="newsContainer flex">
        <div className="detailContent">
          <h1>{newDetail.title}</h1>
          <div dangerouslySetInnerHTML={innerHTML()}></div>
        </div>
        <div className="detailFooter flex">
          <div className="detailLeft">
            {/* <i className="iconfont icon-fanhui" onClick={this.goBack.bind(this)}></i> */}
            <i className="iconfont icon-fanhui" onClick={() => this.props.history.goBack()}></i>
          </div>
          <div className="detailInput" onClick={ (e) => this.toggle(e) }>说点什么吧</div>
          <div className="detailRight flex">
            <div className="detailCom">
              <i className="iconfont icon-pinglun"></i>
              {
                newDetail.reply_count > 0 ? <span className="comentCount">{newDetail.reply_count}</span> : null
              }
            </div>
            <div className="collection">
              <i className="iconfont icon-shoucang"></i>
            </div>
          </div>
        </div>
        {
          this.state.showComment ? this.showCommentHtml(newDetail) : null
        }

      </div>
    )
  }
}

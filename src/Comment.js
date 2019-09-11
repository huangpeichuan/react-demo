import React from 'react';
import { Comment,Icon,Avatar, Tooltip, Form, Button, List, Input } from 'antd';
import moment from 'moment';



  class Comments extends React.Component {
    constructor(props) {
      super(props);
      this.handelClick = this.handelClick.bind(this);
    }

    handelClick() {
      alert(1);
    }
    render() {
      const data = [
        {
          actions: [<span key="comment-list-reply-to-0" onClick={this.handelClick}>Reply to</span>],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: (
            <p>
              莫文蔚的阴天，孙燕姿的雨天，周杰伦的晴天，都不如你和我聊天。 
            </p>
          ),
          datetime: (
            <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')} >
              <span>
                {moment().subtract(1, 'days').fromNow()}
              </span>
            </Tooltip>
          ),
        },
        {
          actions: [<span key="comment-list-reply-to-0">Reply to</span>],
          author: 'Han Solo',
          avatar: 'https://i.52112.com/icon/jpg/256/20181102/23902/1106633.jpg',
          content: (
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully and
              efficiently.
            </p>
          ),
          datetime: (
            <Tooltip
              title={moment()
                .subtract(2, 'days')
                .format('YYYY-MM-DD HH:mm:ss')}
            >
              <span>
                {moment()
                  .subtract(2, 'days')
                  .fromNow()}
              </span>
            </Tooltip>
          ),
        },
      ];

        return (
            <List className="comment-list" header={`${data.length} replies`} itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <li>
                    <Comment
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                    />
                </li>
            )}
        />
        );
    }
    
  }
  //基本评论组件
 class BaseComment extends React.Component {
   state = {
    likes: 0,
    dislikes: 0,
    action: null,
  };

  handelClick =()=> {
    alert(1);
  }

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  render() {
    const { likes, dislikes, action } = this.state;

      const actions = [
        <span key="comment-basic-like">
          <Tooltip title="Like">
            <Icon
              type="like"
              theme={action === 'liked' ? 'filled' : 'outlined'}
              onClick={this.like}
            />
          </Tooltip>
          <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
        </span>,
        <span key=' key="comment-basic-dislike"'>
          <Tooltip title="Dislike">
            <Icon
              type="dislike"
              theme={action === 'disliked' ? 'filled' : 'outlined'}
              onClick={this.dislike}
            />
          </Tooltip>
          <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
        </span>,
        <span key="comment-basic-reply-to" onClick={this.handelClick} >Reply to</span>,
      ];

      return (
        <Comment
          actions={actions}
          author={<a>Han Solo</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully
              and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      );
    }
  }

  //以下是评论框代码
  const { TextArea } = Input;

  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
  class CommentInput extends React.Component{
    state = {
      comments: [],
      submitting: false,
      value: '',
    };
  
    handleSubmit = () => {
      if (!this.state.value) {
        return;
      }
  
      this.setState({
        submitting: true,
      });
  
      setTimeout(() => {
        this.setState({
          submitting: false,
          value: '',
          comments: [
            {
              author: 'Han Solo',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              content: <p>{this.state.value}</p>,
              datetime: moment().fromNow(),
            },
            ...this.state.comments,
          ],
        });
      }, 1000);
    };
  
    handleChange = e => {
      this.setState({
        value: e.target.value,
      });
    };
  
    render() {
      const { comments, submitting, value } = this.state;
  
      return (
        <div>
          {comments.length > 0 && <CommentList comments={comments} />}
          <Comment
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Editor
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        </div>
      );
    }

  }
 
  
export {Comments,BaseComment,CommentInput};
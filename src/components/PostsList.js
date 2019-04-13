import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadMore: false,
      dataLimit: 10
    };
    window.onscroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        this.handleloadMore();
      }
    };
  }

  handleloadMore = () => {
    this.setState(prevState => {
      return {
        dataLimit: prevState.dataLimit + 10
      };
    });
  };

  render() {
    const { posts } = this.props;
    let { loadMore, dataLimit } = this.state;

    if (loadMore === false) {
      return (
        <div className="App">
          {posts.slice(0, dataLimit).map(post => {
            return <Post post={post} key={post.id} />;
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: [...state.posts]
  };
};

export default connect(
  mapStateToProps,
  null
)(PostsList);

import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="App">
        {posts.map(post => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    );
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { setFavoriteActionCreator } from "../actions/index";

export class Post extends Component {
  state = {
    isFavorite: false
  };

  favoriteHandler = post => {
    this.props.setFavoritePost(post);
    this.setState({
      isFavorite: true
    });
  };
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        {this.state.isFavorite ? (
          <div className="star">&#9733;</div>
        ) : (
          <div onClick={() => this.favoriteHandler(post)} className="star">
            &#9734;
          </div>
        )}
        <div className="post-text">
          <a href="#">{post.title}</a>
          <p>{post.id}</p>
          <p>{post.body}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFavoritePost: post => {
      dispatch(setFavoriteActionCreator(post));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Post);

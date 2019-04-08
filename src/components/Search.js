import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { setPostActionCreator } from "../actions/index";
export class Search extends Component {
  state = {
    endpoint: "posts"
  };

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  searcHandler = () => {
    const { endpoint } = this.state;
    const url = `https://jsonplaceholder.typicode.com/${endpoint}`;

    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(posts => {
        this.props.setPosts(posts);
      })
      .catch(err => {
        console.log("error diyeche");
      });
  };
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="endpoint">Endpoint</Label>{" "}
          <Input
            id="endpoint"
            type="text"
            placeholder="posts or comments or users"
            value={this.state.endpoint}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <Button onClick={this.searcHandler}>Search</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPosts: posts => {
      dispatch(setPostActionCreator(posts));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPosts } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPosts(post);
  }

  render() {
    return (
      <div>
        <h1>Add Form</h1>
        <form onSubmit={e => this.onSubmit(e)}>
          <div>
            <label>Title :</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={e => this.onChange(e)}
            />
          </div>
          <br />
          <div>
            <label>Body :</label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={e => this.onChange(e)}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPosts: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPosts }
)(PostForm);

import React, { Component } from "react";

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  handleChange = (event) => {
    // Update state with the user's input
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Invoke the callback prop with the user's input
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default GifSearch;

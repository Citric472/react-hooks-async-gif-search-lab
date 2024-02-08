import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    // Fetch initial data when the component mounts
    this.fetchGifs("dolphin"); // You can set a default search term
  }

  fetchGifs = (query) => {
    // Use your Giphy API key
    const apiKey = "G9qyZEt6FwC741Bny7j0Zjf4e8uoYPxm";
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Store the first 3 gifs in component state
        this.setState({
          gifs: data.data.slice(0, 3),
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  handleSearchSubmit = (query) => {
    // Call the fetchGifs function with the user's input
    this.fetchGifs(query);
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;

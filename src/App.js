import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import MovieCollection from "./components/MovieCollection";
import CustomerCollection from "./components/CustomerCollection";
import Movie from "./components/Movie";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      customers: [],
      selectedMovie: "",
      selectedCustomer: "",
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/customers")
      .then(response => {
        this.setState({
          customers: response.data
        });
      })
      .catch(error => {
        this.setState({
          error: "there was an error"
        });
      });

    axios
      .get("http://localhost:3000/movies")
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        this.setState({
          error: "there was an error"
        });
      });
  }

  selectMovie = (movieId) => {
    const { movies } = this.state;

    const selectedMovie = movies.find((movie) => {
      return movie.id === movieId;
    });

    this.setState({ selectedMovie });
    console.log(this.state.selectedMovie)
  }

  render() {
    const { selectedMovie } = this.state;

    return (
      <div className="App">
        { this.state.selectedMovie !== "" && (
          <h3> Selected Movie: { selectedMovie.title } </h3>
        )}
        <MovieCollection 
          movies={this.state.movies} 
          selectMovieCallback={this.selectMovie}
        />
        <CustomerCollection customers={this.state.customers} />
      </div>
    );
  }
}

export default App;

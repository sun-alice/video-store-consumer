import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import MovieCollection from "./components/MovieCollection";
import CustomerCollection from "./components/CustomerCollection";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      customers: [],
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

  render() {
    return (
      <div className="App">
        <MovieCollection movies={this.state.movies} />
        <CustomerCollection customers={this.state.customers} />
      </div>
    );
  }
}

export default App;

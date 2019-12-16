import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import MovieCollection from "./components/MovieCollection";
import CustomerCollection from "./components/CustomerCollection";
import Movie from "./components/Movie";
import Customer from "./components/Customer";

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

  selectCustomer = customerId => {
    const { customers } = this.state;

    const selectedCustomer = customers.find(customer => {
      return customer.id === customerId;
    });

    this.setState({ selectedCustomer });
    console.log(selectedCustomer);
  };

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

        { this.state.selectedCustomer !== "" && (
          <h3>Selected Customer: {this.state.selectedCustomer.name}</h3>
        )}

        <MovieCollection 
          movies={this.state.movies} 
          selectMovieCallback={this.selectMovie}
        />
        
        <CustomerCollection
          customers={this.state.customers}
          selectCustomerCallback={this.selectCustomer}
        />
      </div>
    );
  }
}

export default App;

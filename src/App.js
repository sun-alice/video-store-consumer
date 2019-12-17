import React, { Component } from "react";
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
      rentals: [],
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
  };

  addRental = (movie, customerId) => {
    const queryParams = {
      customer_id: customerId,
      due_date: "January 25, 2020"
    };

    axios
      .post(
        "http://localhost:3000/rentals/" + `${movie.title}` + "/check-out",
        queryParams
      )
      .then(response => {
        const updatedData = this.state.rentals;
        updatedData.push(response.data);
        this.setState({
          rentals: updatedData,
          error: ""
        });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });

    this.state.selectedCustomer = "";
    this.state.selectedMovie = "";
    this.componentDidMount();
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

  selectMovie = movieId => {
    const { movies } = this.state;

    const selectedMovie = movies.find(movie => {
      return movie.id === movieId;
    });

    this.setState({ selectedMovie });
    console.log(this.state.selectedMovie);
  };

  render() {
    const { selectedMovie } = this.state;

    return (
      <div className="App">
        {this.state.selectedMovie !== "" && (
          <h3> Selected Movie: {selectedMovie.title} </h3>
        )}

        {this.state.selectedCustomer !== "" && (
          <h3>Selected Customer: {this.state.selectedCustomer.name}</h3>
        )}

        {this.state.selectedCustomer !== "" && this.state.selectedMovie !== "" && (
          <button
            type="button"
            onClick={() => {
              this.addRental(
                this.state.selectedMovie,
                this.state.selectedCustomer.id
              );
            }}
          >
            Checkout Movie
          </button>
        )}
        {/* All movies */}
        <MovieCollection
          movies={this.state.movies}
          selectMovieCallback={this.selectMovie}
        />

        <CustomerCollection
          customers={this.state.customers}
          selectCustomerCallback={this.selectCustomer}
        />
        {/* Rentals */}
        {/* <MovieCollection
          movies={this.state.rentals}
          selectMovieCallback={this.selectMovie}
        /> */}
      </div>
    );
  }
}

export default App;

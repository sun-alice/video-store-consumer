import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MovieCollection from "./components/MovieCollection";
import CustomerCollection from "./components/CustomerCollection";
import RentalCollection from "./components/RentalCollection";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      customers: [],
      overdue: [],
      selectedMovie: "",
      selectedCustomer: "",
      showMovies: false,
      showCustomers: false,
      searchBar: false,
      showOverdue: false,
      error: ""
    };
  }

  showMovies = () => {
    const newState = { showMovies: !this.state.showMovies };
    this.setState(newState);
  };

  showCustomers = () => {
    const newState = { showCustomers: !this.state.showCustomers };
    this.setState(newState);
  };

  showOverdue = () => {
    const newState = { showOverdue: !this.state.showOverdue };
    this.setState(newState);
  };

  selectCustomer = customerId => {
    const { customers } = this.state;

    const selectedCustomer = customers.find(customer => {
      return customer.id === customerId;
    });

    this.setState({ selectedCustomer });
  };

  addRental = (movie, customerId) => {
    let tenDaysLater = new Date(
      new Date().getTime() + 10 * 24 * 60 * 60 * 1000
    );

    const queryParams = {
      customer_id: customerId,
      due_date: tenDaysLater
    };

    axios
      .post(
        "http://localhost:3000/rentals/" + `${movie.title}` + "/check-out",
        queryParams
      )
      .then(response => {
        console.log("successfully created rental!");
      })
      .catch(error => {
        this.setState({ error: error.message });
      });

    const newState = { selectedCustomer: "", selectedMovie: "" };
    this.setState(newState);
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

    axios
      .get("http://localhost:3000/rentals/overdue")
      .then(response => {
        this.setState({
          overdue: response.data
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
        {/* buttons */}
        <button
          type="button"
          onClick={() => {
            this.showMovies();
          }}
        >
          All Movies
        </button>

        <button
          type="button"
          onClick={() => {
            this.showCustomers();
          }}
        >
          All Customers
        </button>

        <button
          type="button"
          onClick={() => {
            this.showOverdue();
          }}
        >
          Overdue Movies
        </button>

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

        {this.state.showMovies && (
          <div>
            <MovieCollection
              movies={this.state.movies}
              selectMovieCallback={this.selectMovie}
            />
          </div>
        )}

        {this.state.showCustomers && (
          <div>
            <CustomerCollection
              customers={this.state.customers}
              selectCustomerCallback={this.selectCustomer}
            />
          </div>
        )}

        {this.state.showOverdue && (
          <div>
            <div>
              <RentalCollection rentals={this.state.overdue} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;

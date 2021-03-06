import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MovieCollection from "./components/MovieCollection";
import CustomerCollection from "./components/CustomerCollection";
import RentalCollection from "./components/RentalCollection";
import SearchResults from "./components/SearchResults";
import FlashMessage from "react-flash-message";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Jumbotron,
  Card
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      customers: [],
      overdue: [],
      searchResults: [],
      selectedMovie: "",
      selectedCustomer: "",
      searchTerm: "",
      error: "",
      success: ""
    };
  }

  onChange = event => {
    event.preventDefault();
    const value = event.target.value;

    const newState = {
      searchTerm: value
    };

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
        "https://afternoon-citadel-58941.herokuapp.com/rentals/" + `${movie.title}` + "/check-out",
        queryParams
      )
      .then(response => {
        this.setState({ success: "Rental successfully added!" });
        this.componentDidMount();
      })
      .catch(error => {
        this.setState({ error: error.message });
      });

    const newState = { selectedCustomer: "", selectedMovie: "" };
    this.setState(newState);
  };

  componentDidMount() {
    axios
      .get("https://afternoon-citadel-58941.herokuapp.com/customers")
      .then(response => {
        this.setState({
          customers: response.data
        });
      })
      .catch(error => {
        this.setState({
          error: "There was an error in retrieving the data."
        });
      });

    axios
      .get("https://afternoon-citadel-58941.herokuapp.com/movies")
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        this.setState({
          error: "There was an error in retrieving the data."
        });
      });

    axios
      .get("https://afternoon-citadel-58941.herokuapp.com/rentals/overdue")
      .then(response => {
        this.setState({
          overdue: response.data
        });
      })
      .catch(error => {
        this.setState({
          error: "There was an error in retrieving the data."
        });
      });
  }

  selectMovie = movieId => {
    const { movies } = this.state;

    const selectedMovie = movies.find(movie => {
      return movie.id === movieId;
    });

    this.setState({ selectedMovie });
  };

  searchForMovies = movieTitle => {
    axios
      .get(`https://afternoon-citadel-58941.herokuapp.com/movies/?query=${movieTitle}`)
      .then(response => {
        this.setState({
          searchResults: response.data
        });
        this.componentDidMount();
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  };

  addMovie = newMovie => {
    axios
      .post("https://afternoon-citadel-58941.herokuapp.com/movies", newMovie)
      .then(response => {
        const updatedData = this.state.movies;
        updatedData.push(response.data);
        this.setState({
          movies: updatedData,
          success: "Movie was successfully added to the library!"
        });
        this.componentDidMount();
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
    console.log(this.state.error);
  };

  render() {
    return (
      <div>
        <Router>
          <>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand>
                <Link to="/">VideoStore</Link>
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link type="button">
                  <Link to="/library">All Movies</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/customers">All Customers</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/overdue">Overdue Movies</Link>
                </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={this.onChange}
                />
                <Button
                  variant="outline-info"
                  onClick={() => {
                    this.searchForMovies(this.state.searchTerm);
                  }}
                >
                  <Link to="/search">Search</Link>
                </Button>
              </Form>
            </Navbar>
          </>

          <div className="error">
            <FlashMessage duration={8000} message={this.state.error}>
              <strong>{this.state.error}</strong>
            </FlashMessage>
          </div>
          <div className="success">
            <FlashMessage duration={8000}>
              <strong>{this.state.success}</strong>
            </FlashMessage>
          </div>

          {this.state.selectedMovie !== "" && (
            <Card border="light" bg="dark" text="white" body>
              <div>
                <strong>Selected Movie: </strong>
                {this.state.selectedMovie.title}
              </div>
            </Card>
          )}

          {this.state.selectedCustomer !== "" && (
            <Card border="light" bg="dark" text="white" body>
              <div>
                <strong>Selected Customer: </strong>
                {this.state.selectedCustomer.name}
              </div>
            </Card>
          )}

          {this.state.selectedCustomer !== "" &&
            this.state.selectedMovie !== "" && (
              <Button
                className="checkout-button"
                onClick={() => {
                  this.addRental(
                    this.state.selectedMovie,
                    this.state.selectedCustomer.id
                  );
                }}
              >
                Checkout Movie
              </Button>
            )}

          <Switch>
            <Route exact path="/">
              <div className="contents">
                <Jumbotron fluid>
                  <h1>Video Store</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Jumbotron>
              </div>
            </Route>
            <Route path="/library">
              <div className="contents">
                <MovieCollection
                  movies={this.state.movies}
                  selectMovieCallback={this.selectMovie}
                />
              </div>
            </Route>
            <Route path="/customers">
              <div className="contents">
                <CustomerCollection
                  customers={this.state.customers}
                  selectCustomerCallback={this.selectCustomer}
                />
              </div>
            </Route>
            <Route path="/overdue">
              <div className="contents">
                <section className="no-overdue">
                  {this.state.overdue.length === 0 && (
                    <Jumbotron>
                      <h1>There are no overdue movies.</h1>
                    </Jumbotron>
                  )}
                </section>

                {this.state.overdue.length !== 0 && (
                  <div>
                    <RentalCollection rentals={this.state.overdue} />
                  </div>
                )}
              </div>
            </Route>
            <Route path="/search">
              <div className="contents">
                <SearchResults
                  result={this.state.searchResults}
                  addMovieCallback={this.addMovie}
                />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

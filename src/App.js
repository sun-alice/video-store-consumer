import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import MovieCollection from "./components/MovieCollection";
import CustomerCollection from "./components/CustomerCollection";
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

  render() {
    return (
      <div className="App">
        {this.state.selectedCustomer !== "" && (
          <h3>Selected Customer: {this.state.selectedCustomer.name}</h3>
        )}

        <MovieCollection movies={this.state.movies} />
        <CustomerCollection
          customers={this.state.customers}
          selectCustomerCallback={this.selectCustomer}
        />
      </div>
    );
  }
}

export default App;

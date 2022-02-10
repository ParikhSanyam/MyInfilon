import React, { Component } from "react";
import Tabledata from "./component/Tabledata/Tabledata";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://reqres.in/api/users?page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      data: parseData.data,
    });
  }
  handlenext = async () => {
    let url = `https://reqres.in/api/users?page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      data: parseData.data,
      page: this.state.page + 1,
    });
  };
  handleprev = async () => {
    let url = `https://reqres.in/api/users?page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      data: parseData.data,
      page: this.state.page - 1,
    });
  };
  render() {
    return (
      <div className="app-outer-wrapper">
        <div className="app-wrapper container mt-4 p-0">
          <table className="w-100 table table-responsive table-hover table-striped mb-0">
            <thead>
              <tr>
                <th align="center">Sr no</th>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <Tabledata data={this.state.data} />
            </tbody>
          </table>
          <div className="button_wrapper d-flex justify-content-end py-3">
            <div>
              <button
                disabled={this.state.page <= 1}
                className="btn btn-dark ms-4"
                onClick={this.handleprev}
              >
                &#8592; Previous
              </button>
            </div>
            <div>
              <button
                disabled={this.state.page === 2}
                className="btn btn-dark ms-4 me-4"
                onClick={this.handlenext}
              >
                Next &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

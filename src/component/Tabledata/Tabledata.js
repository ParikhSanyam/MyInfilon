import React, { Component } from "react";
import "./Tabledata.scss";

export default class Tabledata extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
    };
  }
  render() {
    let { data } = this.props;
    return (
      <>
        {data.map((e) => {
          console.log(e.id);
          return (
            <>
              <tr key={e.id}>
                <td align="center">
                  <b>{e.id}</b>.
                </td>
                <td align="center">
                  <img src={e.avatar} className="avatar-img" alt="avatar" />
                </td>
                <td>{e.first_name}</td>
                <td>{e.last_name}</td>
                <td>{e.email}</td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td className="px-3 text-success">
                          <i
                            className="fa fa-pencil"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => {
                              this.setState({
                                id: e.id,
                                first_name: e.first_name,
                                last_name: e.last_name,
                                email: e.email,
                              });
                            }}
                          />
                        </td>
                        <td className="px-3 text-danger">
                          <i className="fa fa-trash"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit Data
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="d-flex flex-column">
                          <label className="mb-2 ps-1"><small><b>First Name</b></small></label>
                        <input
                          type="text"
                          className="mb-2"
                          value={this.state.first_name}
                          onChange={(e) => {
                            this.setState({
                              first_name: e.target.value,
                            });
                          }}
                        />
                        <label className="mb-2 ps-1"><small><b>Last Name</b></small></label>
                        <input
                          type="text"
                          className="mb-2"
                          value={this.state.last_name}
                          onChange={(e) => {
                            this.setState({
                              last_name: e.target.value,
                            });
                          }}
                        />
                        <label className="mb-2 ps-1"><small><b>Email</b></small></label>
                        <input
                          type="text"
                          className="mb-2"
                          value={this.state.email}
                          onChange={(e) => {
                            this.setState({
                              email: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          localStorage.setItem(
                            "first_name",
                            this.state.first_name
                          );
                          localStorage.setItem(
                            "last_name",
                            this.state.last_name
                          );
                          localStorage.setItem("email", this.state.email);
                        }}
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

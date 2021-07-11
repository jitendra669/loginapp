import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "./redux/actions/loginAction";
import util from "./utils/users.json";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: {},
  };

  validate = () => {
    const { username, password } = this.state;
    if (username === "" || password === "") {
      return true;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, error } = this.state;

    if (
      username === util.loginUser.username &&
      password === util.loginUser.password
    ) {
      const user = {
        username: this.state.username,
      };
      delete error["Invalid"];
      this.props.login(user);
      this.props.history.push("/dashboard");
    } else {
      error["Invalid"] = "Invalid username or password";
      this.setState({ error });
    }
  };

  handleChange = (e) => {
    debugger;
    const { error } = this.state;
    delete error[e.target.name];
    this.setState({ [e.target.name]: e.target.value, error });
    if (e.target.value === "") {
      error[e.target.name] = `Please fill ${e.target.name}`;
      this.setState({ error });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div style={{ width: "25%", margin: "20px 0px 0px 50px" }}>
        <form onSubmit={this.handleSubmit}>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="User Name"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {error && error.username ? (
              <span style={{ color: "red" }}>{error.username}</span>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {error && error.password ? (
              <span style={{ color: "red" }}>{error.password}</span>
            ) : (
              ""
            )}
            {error && error.Invalid ? (
              <span style={{ color: "red" }}>{error.Invalid}</span>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            disabled={this.validate()}
            className="btn btn-primary btn-block"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Login));

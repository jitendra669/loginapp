import React, { Component } from "react";
import { connect } from "react-redux";
import { UsersList } from "./redux/actions/loginAction";
import UserList from "./UserList";
import util from "./utils/users.json";

class UserDashboard extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.props.addusers(util.users);
  }
  render() {
    return <UserList />;
  }
}

const mapDispacthToProps = (dispatch) => {
  return {
    addusers: (users) => dispatch(UsersList(users)),
  };
};

export default connect(null, mapDispacthToProps)(UserDashboard);

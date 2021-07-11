import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  debugger;
  const data = useSelector((state) => state.user);
  return (
    <div className="container mt-20">
      <table>
        <thead className="table">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        {data.users.length > 0 &&
          data.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default UserList;

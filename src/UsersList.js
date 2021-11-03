import React from "react";
import "./UsersList.css";

function UsersList(props) {
  let usersList = props.usersList;
  let usersLiElements = usersList.map((user) => {
    return (
      <li key={user.id}>
        {user.name}
        <span
          onClick={() => {
            props.removeUserMethod(user.id);
          }}
        >
          <i className="fas fa-user-slash"></i>
        </span>
      </li>
    );
  });
  return <ul className="the-list">{usersLiElements}</ul>;
}
export default UsersList;

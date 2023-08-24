import React from "react";
import Card from "./Card";
import styles from "../css/UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.userAge} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

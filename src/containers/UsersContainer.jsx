import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Users.css";
import { getAllUsers, deleteUserAxios } from "../methods/axiosRequests";
import Users from "../components/Users";

const UsersContainer = () => {
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const { user } = useSelector(state => state);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const deleteUser = (userId) => {
    deleteUserAxios(userId);
  };

  return <Users users={users} deleteUser={deleteUser} />;
};

export default UsersContainer;

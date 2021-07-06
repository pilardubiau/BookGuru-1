import React, { useEffect, useState } from "react";
import "../styles/Users.css";
import { getAllUsers, deleteUserAxios, setToAdminAxios } from "../methods/axiosRequests";
import Users from "../components/Users";

const UsersContainer = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(({ data }) => { setUsers(data) });
  }, []);

  const deleteUser = (userId) => {
    deleteUserAxios(userId)
    .then(()=> getAllUsers())
    .then(res => setUsers(res.data))
  };

  const setToAdmin = (userId) => {
    setToAdminAxios(userId).then(()=> alert('Admin status toggled'))
    .then(()=> getAllUsers())
    .then(res => setUsers(res.data))
  }

  return <Users users={users} deleteUser={deleteUser} setToAdmin={setToAdmin}/>;
};

export default UsersContainer;

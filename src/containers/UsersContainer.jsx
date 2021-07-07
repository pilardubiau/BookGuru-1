import React, { useEffect, useState } from "react";
import {
  getAllUsers,
  deleteUserAxios,
  setToAdminAxios,
} from "../axiosRequests/usersAxios";
import SuccessToast from "../hooks/toastNotifications/SuccessToast";
import Users from "../components/Users";
import "../styles/Users.css";

const UsersContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const deleteUser = (userId) => {
    deleteUserAxios(userId)
      .then(() => getAllUsers())
      .then((res) => {
        setUsers(res.data);
        SuccessToast(`🚫User ${users[0].username} Deleted!🚫`);
      });
  };

  const setToAdmin = (userId) => {
    setToAdminAxios(userId)
      .then(({ data }) => {
        SuccessToast(`👩‍💻${data.username} admin status toggled👩‍💻`);
      })
      .then(() => getAllUsers())
      .then((res) => setUsers(res.data));
  };

  return (
    <Users users={users} deleteUser={deleteUser} setToAdmin={setToAdmin} />
  );
};

export default UsersContainer;

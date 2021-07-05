import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SingleUser from "../components/SingleUser";
import { getSingleUser } from "../methods/axiosRequests";

const SingleUserContainer = () => {
  const [singleUser, setSingleUser] = useState({});

  const userId = useSelector((state) => state.user.id);
  const history = useHistory();

  useEffect(() => {
    getSingleUser(userId).then(({ data }) => {
      console.log("esto es data: ", data);
      setSingleUser(data);
    });
  }, []);

  console.log("SingleUserContainer: ", singleUser);

  return <SingleUser singleUser={singleUser} />;
};

export default SingleUserContainer;

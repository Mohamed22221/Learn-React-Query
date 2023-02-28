import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const getUsers = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const getCourses = (chanallId) => {
  return axios.get(`http://localhost:4000/channals/${chanallId}`);
};
const Dependent = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => getUsers(email));
  const chanallId = user?.data.channalId;
  const { data: array } = useQuery(["channalId", chanallId], () =>
    getCourses(chanallId)
  );

  return (
    <div>
      {array?.data.channalId.map((item) => {
        return (
          <div>
            <h2>{item}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Dependent;

import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const InfinityData = () => {
  const { data } = useQuery("colors", () =>
    axios.get(`http://localhost:4000/colors`)
  );
  return (
    <>
      <h2>Infinity Data</h2>
      {data?.data.map((item) => {
        return (
          <div key={item.id}>
            <p>
              {item.id} : {item.label}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default InfinityData;

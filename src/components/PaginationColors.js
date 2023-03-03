import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const PaginationColors = () => {
  const [paginationNum, setPaginationNum] = useState(1);
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["colors", paginationNum],
    () =>
      axios.get(`http://localhost:4000/colors?_limit=2&_page=${paginationNum}`),
    {
      keepPreviousData: true,
    }
  );


  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Super Colors</h2>
      {data?.data.map((item) => {
        return (
          <div key={item.id}>
            <p>
              {item.id} : {item.label}
            </p>
          </div>
        );
      })}
      <button
        onClick={() => setPaginationNum(paginationNum - 1)}
        disabled={paginationNum === 1}
      >
        Prev-
      </button>
      <button
        onClick={() => setPaginationNum(paginationNum + 1)}
        disabled={paginationNum === 4}
      >
        Next+
      </button>
      {isFetching  && "..loading"}
    </>
  );
};

export default PaginationColors;

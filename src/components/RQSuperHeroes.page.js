import { useState } from "react";
import { Link } from "react-router-dom";
import { PostHeroes, StoreHeroes } from "../hooks/storeHeroes";

export const RQSuperHeroesPage = () => {
  const [newData , setNewData] = useState({
    body : "",
    title : "" ,
    userId : 1
  })
  const handelChange = (e) =>{
    setNewData({ ...newData, [e.target.name]: e.target.value })
  }
  console.log(newData)
  const { data, isLoading, isError, error } = StoreHeroes("posts");
  const { mutate } = PostHeroes();

  const handleAddHeroClick = () => {
    const posts = newData
    mutate(posts);
  };


  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      <div>
        <input
          type="text"
          name="body"
          value={newData?.body}
          onChange={handelChange}
        />
        <input
          type="text"
          name="title"
          value={newData?.title}
          onChange={handelChange}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button>Fetch heroes</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.title}</Link>
          </div>
        );
      })}
    </>
  );
};

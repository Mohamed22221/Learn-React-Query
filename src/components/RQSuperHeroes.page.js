import { Link } from "react-router-dom";
import { StoreHeroes } from "../hooks/storeHeroes";

export const RQSuperHeroesPage = () => {
  const { data, isLoading, isError, error } = StoreHeroes("posts");

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
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

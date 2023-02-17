import { useParams } from "react-router-dom";
import { StoreHero } from "../hooks/storeHeroes";

export const RQSuperHeroPage = () => {
  const { postId } = useParams();
  const { data, isLoading, isError, error } = StoreHero("post", postId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>Super Hero Page</h2>
      <h3>{data?.data.title}</h3>
    </>
  );
};

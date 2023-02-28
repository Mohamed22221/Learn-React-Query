import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

export const StoreHeroes = (key) => {
  return useQuery(key, () => axios.get("http://localhost:4000/posts"));
};

export const StoreHero = (key, id) => {
  const queryClient = useQueryClient();
  return useQuery(
    [key, id],
    () => axios.get(`http://localhost:4000/posts/${id}`),
    {
      initialData: () => {
        const post = queryClient
          .getQueryData("posts")
          ?.data.find((post) => post.id === parseInt(id));
        if (post) {
          return { data: post };
        } else {
          return undefined;
        }
      },
    }
  );
};

import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const addSuperHero = (data) => {
  return axios.post("http://localhost:4000/posts", data);
};

export const StoreHeroes = (key) => {
  return useQuery(key, () => axios.get("http://localhost:4000/posts"));
};

export const PostHeroes = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero , {
    onSuccess : (data) =>{
      queryClient.setQueriesData("posts" , (oldData) =>{
        return {
          ...oldData ,
          data : [...oldData.data , data.data]
        }
      })
    }
  });
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

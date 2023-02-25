import axios from "axios";
import { useQuery } from "react-query";


export const StoreHeroes = (key) => {
  return useQuery(key, () => axios.get("http://localhost:4000/posts"));
};

export const StoreHero = (key , id) => {
    return useQuery([key , id], () => axios.get(`http://localhost:4000/posts/${id}`));
  };
  

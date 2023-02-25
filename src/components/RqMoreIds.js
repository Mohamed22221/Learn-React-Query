import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'
const fetchHeroIds = (heroId) =>{
    return axios.get(`http://localhost:4000/posts/${heroId}`)
}

const RqMoreIds = ({heroIds}) => {
    const queryResult = useQueries(heroIds.map((id) =>{
        console.log(id)
        return {
            queryKey : ["super-id" , id],
            queryFn : () =>fetchHeroIds(id),
        }
    }))
  return (
    <div>{queryResult.map(item =>{
        return (
            <h3>{item.data?.data.title}</h3>
        )
    })}</div>
  )
}

export default RqMoreIds
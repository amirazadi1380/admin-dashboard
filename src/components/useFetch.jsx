import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function useFetch() {
    const [products,setproducts] = useState([]);
    const [users,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(false)
    const [errText,setErrText] = useState('')
    const product_url = "https://dummyjson.com/products";
    const user_url = "https://dummyjson.com/users";
    useEffect(()=>{
        async function fetchMyData(){
           await axios.get(product_url)
            .then(res=>setproducts(res.data.products))
            
            setIsLoading(true)
            await axios.get(user_url)
            .then(res=>setUsers(res.data.users))
            .catch(err=>setErrText(err.message))
            setIsLoading(false)
        }
        fetchMyData();
    },[])
  return {products,setproducts,errText,isLoading,users,setUsers}
}

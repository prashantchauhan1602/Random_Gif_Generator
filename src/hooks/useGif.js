import React from 'react'
import {useState , useEffect} from "react"
import axios from 'axios';

const API_KEY = 'MAqDlgPYjByKCJpXiqXv4FVmFAtgKaGG' ;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const[gif , setGif] = useState("");
    const[loading , setLoading] = useState(false);

    async function fetchData(tag)
    {
        setLoading(true); 
        const {data} = await axios.get(tag ? `${url}&tag=${tag}`: url) ;
        // console.log(output);
        // Path is : data data images downsize url
        const imageSource = data.data.images.downsized_large.url ;
        // console.log(imageSource);
        setGif(imageSource);
        setLoading(false);    
    }

    useEffect( () => {
        fetchData("car");
    }, []) 
    
    return {gif , loading,fetchData};
  
}
export default useGif
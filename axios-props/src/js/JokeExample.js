import React, {useState,useEffect} from "react";
import axios from "axios";

const Joke = () => {
    const [joke, setJoke] = useState('');

    useEffect(()=>{
        axios.get("https://v2.jokeapi.dev/joke/Any")
        .then(response => {
            setJoke(response.data.joke || `${response.data.setup} ${response.data.delivery}`);
        })
        .catch(err => console.log("err", err));
    },[]);

    return(
        <div>
            <p>{joke}</p>
        </div>
    );
}

export default Joke;
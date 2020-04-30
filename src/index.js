import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import axios from "axios"

axios({
    "method":"GET",
    "url":"https://rawg-video-games-database.p.rapidapi.com/games?search=resident+evil&page=2",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


serviceWorker.unregister();
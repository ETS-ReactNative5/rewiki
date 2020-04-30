import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

 class recu extends Component {
  state={
    residentEvilcu:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-the-umbrella-chronicles-2",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvilcu:response.data,
                dataready:true
              })
              console.log(response)
            })
            .catch((error)=>{
              console.log(error)
            })
    }
    
    render() {
    return (
        
      <div>
      {this.state.dataready?(<div className="content"> 
      <div className="content2"><h1>{this.state.residentEvilcu.name}</h1> 
      {this.state.residentEvilcu.description_raw.slice(0,289)}
      <p>Achivements: {this.state.residentEvilcu.achievements_count}</p>
      <p>Available on:</p>
      
      <button><Link to="/side">&laquo; Back</Link></button>
      </div>
      
      <video autoPlay muted loop id="myVideo">
          <source src="./ubc.mp4" type="video/mp4"/>
      </video>
      </div>):("loading...")}
     
      </div>
    );
  }
}

export default recu;
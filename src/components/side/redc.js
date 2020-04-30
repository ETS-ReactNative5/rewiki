import React, { Component } from 'react';
import axios from 'axios';

 class redc extends Component {
  state={
    residentEvildc:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-the-darkside-chronicles-2",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvildc:response.data,
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
      <div className="content2"><h1>{this.state.residentEvildc.name}</h1> 
      {this.state.residentEvildc.description_raw.slice(0,528)}
      <p>Achivements: {this.state.residentEvildc.achievements_count}</p>
      <p>Available on:</p>
      
      </div>
      
      <video autoPlay muted loop id="myVideo">
          <source src="./dark.mp4" type="video/mp4"/>
      </video>
      </div>):("loading...")}
     
      </div>
    );
  }
}

export default redc;
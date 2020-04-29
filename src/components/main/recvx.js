import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

 class re2 extends Component {
  state={
    residentEvilcode:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-2",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvilcode:response.data,
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
      <h1>{this.state.residentEvilcode.name}</h1> 
      {this.state.residentEvilcode.description_raw}
      <p>Achivements: {this.state.residentEvilcode.achievements_count}</p>
      <p>Available on:</p>
      
      <video autoPlay muted loop id="myVideo">
          <source src={this.state.residentEvilcode?.clip?.clip} type="video/mp4"/>
      </video>
      </div>):("loading...")}
     
      </div>
    );
  }
}

export default re2;
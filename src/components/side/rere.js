import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

 class rerev extends Component {
  state={
    residentEvilrev:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-revelations-biohazard-revelations",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvilrev:response.data,
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
      <div className="content2"><h1>{this.state.residentEvilrev.name} ({this.state.residentEvilrev.released.slice(0, 4)})</h1> 
      {this.state.residentEvilrev.description_raw}
      <p>Achivements: {this.state.residentEvilrev.achievements_count}</p>
      <p>Available on:</p>
      
      <button><Link to="/side">&laquo; Back</Link></button>
      </div>
      
      <video autoPlay muted loop id="myVideo">
          <source src={this.state.residentEvilrev?.clip?.clip} type="video/mp4"/>
      </video>
      </div>):("loading...")}
     
      </div>
    );
  }
}

export default rerev;
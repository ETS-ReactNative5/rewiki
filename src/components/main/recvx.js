import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

 class recvx extends Component {
  state={
    residentEvilcode:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-code-veronica-x",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvilcvx:response.data,
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
      <div className="content2"><h1>{this.state.residentEvilcvx.name} (2011)</h1> 
      {this.state.residentEvilcvx.description_raw.slice(58,581)}
      <p>Achivements: {this.state.residentEvilcvx.achievements_count}</p>
      <p>Available on:</p>
      <button><Link to="/main">&laquo; Back</Link></button>

      </div>    
      
      <video autoPlay muted loop id="myVideo">
          <source src={this.state.residentEvilcvx?.clip?.clip} type="video/mp4"/>
      </video>
      </div>):<img src="./images/jill.gif" alt="loading"/>}
     
      </div>
    );
  }
}

export default recvx;
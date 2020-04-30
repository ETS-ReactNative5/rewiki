import React, { Component } from 'react';
import axios from 'axios';

 class reob extends Component {
  state={
    residentEviloutbreak:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-outbreak-file-2",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEviloutbreak:response.data,
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
      <div className="content2"><h1>{this.state.residentEviloutbreak.name} ({this.state.residentEviloutbreak.released.slice(0, 4)})</h1> 
      {this.state.residentEviloutbreak.description_raw}
      <p>Achivements: {this.state.residentEviloutbreak.achievements_count}</p>
      <p>Available on:</p>
      
      </div>
      
      <video autoPlay muted loop id="myVideo">
          <source src="./outbreak.mp4" type="video/mp4"/>
      </video>
      </div>):("loading...")}
     
      </div>
    );
  }
}

export default reob;
import React, { Component } from 'react';
import axios from 'axios';

 class re6 extends Component {
  state={
    residentEvil6:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-6",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvil6:response.data,
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
      <div className="content2"><h1>{this.state.residentEvil6.name} ({this.state.residentEvil6.released.slice(0, 4)})</h1> 
      {this.state.residentEvil6.description_raw}
      <p>Achivements: {this.state.residentEvil6.achievements_count}</p>
      <p>Available on:</p>
      
      </div>

      <video autoPlay muted loop id="myVideo">
          <source src={this.state.residentEvil6?.clip?.clip} type="video/mp4"/>
      </video>
      </div>):("loading...")}
     
      </div>
    );
  }
}

export default re6;
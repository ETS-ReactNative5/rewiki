import React, { Component } from 'react';
import axios from 'axios';

class re0 extends Component {
  state={
    residentEvil0:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-0",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvil0:response.data,
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
      <div className="content2"><h1>{this.state.residentEvil0.name.slice(0, 15)} (2002)</h1> 
      {this.state.residentEvil0.description_raw}
      <p>Achivements: {this.state.residentEvil0.achievements_count}</p>
      <p>Available on:{this.state.residentEvil0.stores[0].store.name}</p>
      
      </div>
      
      <video autoPlay muted loop id="myVideo">
          <source src={this.state.residentEvil0?.clip?.clip} type="video/mp4"/>
      </video>
      </div>):("loading...")}
     
      </div>
    );
  }
}

export default re0;
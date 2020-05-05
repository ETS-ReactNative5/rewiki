import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

 class re5 extends Component {
  state={
    residentEvil5:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-5-biohazard-5",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvil5:response.data,
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
      <div className="content2"><h1>{this.state.residentEvil5.name} ({this.state.residentEvil5.released.slice(0, 4)})</h1> 
      {this.state.residentEvil5.description_raw.slice(0,585)}
      <p>Achivements: {this.state.residentEvil5.achievements_count}</p>
      <p>Available on:</p>
      <button><Link to="/main">&laquo; Back</Link></button>

      </div>

      <video autoPlay muted loop id="myVideo">
          <source src="./videos/Re5.mp4" type="video/mp4"/>
      </video>
      </div>):<img src="./images/jill.gif" alt="loading"/>}
     
      </div>
    );
  }
}

export default re5;
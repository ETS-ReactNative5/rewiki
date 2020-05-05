import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

 class re3 extends Component {
  state={
    residentEvil3:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil-3",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvil3:response.data,
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
      <div className="content2"><h1>{this.state.residentEvil3.name} (1999)</h1> 
      <p>"Join Jill Valentine, the heroine and amazing survivor of the notorious disaster at the mansion, as her nightmare continues. The next terrifying drama from the blockbuster Resident Evil® Series. This unique adventure intricately reveals more of Umbrella Corporation’s nightmarish plot and picks up just hours before the events from Resident Evil® 2."</p>
      <p>Achivements: {this.state.residentEvil3.achievements_count}</p>
      <p>Available on:</p>
      <button><Link to="/main">&laquo; Back</Link></button>

      </div>
      
      <video autoPlay muted loop id="myVideo">
          <source src={this.state.residentEvil3?.clip?.clip} type="video/mp4"/>
      </video>
      </div>):<img src="./images/jill.gif" alt="loading"/>}
     
      </div>
    );
  }
}

export default re3;
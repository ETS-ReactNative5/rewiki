import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class re1 extends Component {
  state={
    residentEvil1:{},
    dataready:false
  }
    componentDidMount=()=>{
      axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/resident-evil",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"8973ad755emsh3a05788bfbba4f9p1c697bjsn500019fa05d0"
            }
            })
            .then((response)=>{
              this.setState({
                residentEvil1:response.data,
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
      <div className="content2"><h1>{this.state.residentEvil1.name} ({this.state.residentEvil1.released.slice(0, 4)})</h1> 
      {this.state.residentEvil1.description_raw}
      <p>Achivements: {this.state.residentEvil1.achievements_count}</p>
      <p>Available on:{this.state.residentEvil1.stores[0].store.name},{this.state.residentEvil1.stores[1].store.name},{this.state.residentEvil1.stores[2].store.name},{this.state.residentEvil1.stores[3].store.name}</p>
      <button><Link to="/main">&laquo; Back</Link></button>

      </div>

      <video autoPlay muted loop id="myVideo">
          <source src={this.state.residentEvil1?.clip?.clip} type="video/mp4"/>
      </video>
      </div>):<img src="./images/jill.gif" alt="loading"/>}
     
      </div>
    )
  }
}

export default re1;
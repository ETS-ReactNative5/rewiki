import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import trivia  from './components/trivia';
import home from './components/home';
import side from './components/side';
import main from './components/main';
import re0 from './components/main/re0';
import re1 from './components/main/re1';
import re2 from './components/main/re2';
import re3 from './components/main/re3';
import recvx from './components/main/recvx';
import re4 from './components/main/re4';
import re5 from './components/main/re5';
import re6 from './components/main/re6';
import re7 from './components/main/re7';
import reob from './components/side/reob';
import rerc from './components/side/rerc';
import rere from './components/side/rere';
import rere2 from './components/side/rere2';
import reuc from './components/side/reuc';
import redc from './components/side/redc';
import recu from './components/side/recu';



function App() {
  return (
    <React.Fragment>
    <table>
    <tr>
       <td><Navbar/></td> 
       <td> <Switch>
          <Route exact path="/" component={home} />
          <Route path="/main" component={main} />
          <Route path="/side" component={side} />
          <Route path="/trivia" component={trivia} />
          <Route path="/re0" component={re0} />
          <Route path="/re1" component={re1} />
          <Route path="/re2" component={re2} />
          <Route path="/re3" component={re3} />
          <Route path="/recvx" component={recvx} />
          <Route path="/re4" component={re4} />
          <Route path="/re5" component={re5} />
          <Route path="/re6" component={re6} />
          <Route path="/re7" component={re7} />
          <Route path="/reob" component={reob} />
          <Route path="/rerc" component={rerc} />
          <Route path="/rere" component={rere} />
          <Route path="/rere2" component={rere2} />
          <Route path="/reuc" component={reuc} />
          <Route path="/redc" component={redc} />
          <Route path="/recu" component={recu} />
        </Switch>
        
        </td> 
    </tr>
    </table> 

        

       
     
    </React.Fragment>
  );
}

export default App;
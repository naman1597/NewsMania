import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {Switch, Route} from  'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  //const pageSize = 5;
  const apiKey = 'pub_8978cd7bcc704eea55ad227670a12c62eebd';
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
        
         />
         
      <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="home" /*pageSize={pageSize}*/ country="in" category="politics"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" /*pageSize={pageSize}*/ country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" /*pageSize={pageSize}*/ country="in" category="entertainment"/></Route> 
          <Route exact path="/world"><News setProgress={setProgress} apiKey={apiKey} key="world" /*pageSize={pageSize}*/ country="in" category="world"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" /*pageSize={pageSize}*/ country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" /*pageSize={pageSize}*/ country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" /*pageSize={pageSize}*/ country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" /*pageSize={pageSize}*/ country="in" category="technology"/></Route> 
        </Switch>
        
      </div>
    )
 
}

export default App;

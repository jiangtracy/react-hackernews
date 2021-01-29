import './App.css';
import StoryList from "./StoryList";
import React from "react";

/* 
props: none 
states: none 
App -> StoryList
*/
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <StoryList/>
      </div>
    );
  }
}


export default App;

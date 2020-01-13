import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import {Route} from 'react-router-dom'
import TasksDispaly from './components/TasksDisplay/TasksDisplay';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav}/>
      <TasksDispaly></TasksDispaly>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import {Route} from 'react-router-dom'
import TasksDispaly from './components/TasksDisplay/TasksDisplay';
import Task from './components/Task/Task'
import City from './components/City/City';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav}/>
      <TasksDispaly></TasksDispaly>
      {/* <Task/> */}
     <City/>
    </div>
  );
}

export default App;

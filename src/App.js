import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import Main from './components/Main/Main';

function App() {
  const [tasksArray,setTasksArray] = React.useState(JSON.parse(localStorage.getItem('items')) || []);
  const [textTask,setTextTask] = React.useState('');
  const [editTextTask,setEditTextTask] = React.useState('');

  React.useEffect(()=>{
    localStorage.setItem('items',JSON.stringify(tasksArray));
  },[tasksArray]);

  return (
    <div className="App">
      <Header textTask={textTask} setTextTask={setTextTask} tasksArray={tasksArray} setTasksArray={setTasksArray}/>
      <Main editTextTask={editTextTask} setEditTextTask={setEditTextTask} setTasksArray={setTasksArray} tasksArray={tasksArray}/>
    </div>
  );
}

export default App;

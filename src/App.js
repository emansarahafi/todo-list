import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import AddTask from './components/AddTask';

function App() {
  const list = [
    { id: "0", text: "Apply for US Visa", done: false, date: new Date() },
    { id: "1", text: "Eat Healthy", done: false, date: new Date() },
    { id: "2", text: "Go to the gym", done: false, date: new Date() },
  ];

  const [listOfTasks, setList] = useState([...list]);

  const add = (task) => {
    const addedList = [...listOfTasks, task];
    setList(addedList);
  }

  const handleDelete = (id) => {
    const updatedList = listOfTasks.filter((elt) => elt.id !== id);
    setList(updatedList);
  };

  const toggleTaskCompletion = (id) => {
    const updatedList = listOfTasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setList(updatedList);
  };

  return (
    <div className="App p-3" style={{backgroundImage:'url("todo.png")', backgroundSize:"cover", minHeight:"100vh"}}>
      <AddTask add={add} />
      <div className="mt-5">
        <List
          list={listOfTasks}
          toggleTaskCompletion={toggleTaskCompletion}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;

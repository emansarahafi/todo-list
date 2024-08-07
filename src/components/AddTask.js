import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddTask({ add }) {
  const [newTask, setNewTask] = useState({ 
    id: "", 
    text: "", 
    done: false, 
    date: new Date() 
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.text.trim() !== "") {
      add(newTask);
      setNewTask({ id: "", text: "", done: false, date: new Date() });
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Add a new task"
        value={newTask.text}
        onChange={handleChange}
        className="mb-2"
      />
      <Button variant="primary" type="submit">Add</Button>
    </Form>
    </div>
    
  );
}

export default AddTask;

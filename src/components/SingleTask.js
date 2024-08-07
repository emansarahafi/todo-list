import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SingleTask({ task, toggleTaskCompletion, handleDelete }) {
  const deleteTask = () => {
    handleDelete(task.id);
  };

  const titleStyle = task.done ? { textDecoration: 'line-through' } : {};

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString(undefined, options);

    const [day, month, year] = formattedDate.split(" ");
    
    return (
      <div>
        <div className="mb-2">{day}</div>
        <div className="mb-2">{month}</div>
        <div className="mb-2">{year}</div>
      </div>
    );
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title style={titleStyle}>{task.text}</Card.Title>
        <Form.Check
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTaskCompletion(task.id)}
          label="done"
        />
        <Card.Text>
          {formatDate(task.date)}
        </Card.Text>
        <Button variant="danger" onClick={deleteTask}>
          delete
        </Button>
      </Card.Body>
    </Card>
  );
}

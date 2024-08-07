import React from 'react';
import SingleTask from './SingleTask';

function List({ list, toggleTaskCompletion, handleDelete }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
        {list.map((task) => (
        <SingleTask
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          handleDelete={handleDelete}
        />
        ))}
        </div>
      
    </div>
  );
}

export default List;

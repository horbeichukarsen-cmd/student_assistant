import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #242424;
  color: #ffffff;
  border-left: 4px solid ${(props) => (props.$priority === "high" ? "#e63946" : "#2a9d8f")};
  list-style: none;
`;

function TaskItem({ task }) {
  return (
    <StyledCard 
      $priority={task.priority} 
      className={`task-card priority-${task.priority} ${task.completed ? 'completed' : ''}`}
    >
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <span> - {task.priority}</span>
      {task.priority === "high" && (
        <span style={{ color: "red", fontWeight: "bold" }}> — Терміново!</span>
      )}
    </StyledCard>
  );
}

export default TaskItem;
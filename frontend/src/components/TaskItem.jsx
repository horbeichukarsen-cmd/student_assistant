import React from 'react';

function TaskItem({ task }) {
  return (
    <li className={`task-card priority-${task.priority} ${task.completed ? 'completed' : ''}`}>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <span> - {task.priority}</span>
      {task.priority === "high" && <span style={{ color: "red", fontWeight: "bold" }}> — Терміново!</span>}
    </li>
  );
}
export default TaskItem;

import styled from "styled-components";

const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 4px solid ${(props) => (props.$priority === "high" ? "#e63946" : "#2a9d8f")};
`;

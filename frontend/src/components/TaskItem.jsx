function TaskItem({ task }) {
  return (
    <li className="task-item">
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <span> - {task.priority}</span>
      {task.priority === "high" && <span style={{ color: "red", fontWeight: "bold" }}> - Терміново!</span>}
    </li>
  );
}

export default TaskItem;
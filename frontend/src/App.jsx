import './App.css'
import tasks from "./tasks.json"
import Header from "./components/Header"
import TaskList from "./components/TaskList"

function App() {
  return (
    <div className="app-container">
      <Header taskCount={tasks.length} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
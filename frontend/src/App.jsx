import './App.css'
import tasks from "./tasks.json"
import Header from "./components/Header"
import TaskList from "./components/TaskList"

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App

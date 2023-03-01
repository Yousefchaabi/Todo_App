import "./App.css";
import Navbar from "./components/NavBar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TotalCompleteTasks from "./components/TotalCompleteTasks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddTask />
      <TaskList />
      <TotalCompleteTasks />
    </div>
  );
}

export default App;

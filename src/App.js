import "./App.css";
import Navbar from "./components/NavBar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;

import { useState } from "react"

import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctor',
      day: "Feb 5th at 2.30",
      reminder: true,
    },
    {
      id: 2,
      text: "Market",
      day: "Jan 20th at 2.30",
      reminder: true,
    }
  ])

  //Delete task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTask />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("No tasks to show")}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Lists from "./Components/Lists/Lists";

import { getList, save, update, clearAll, remove, getById } from './Utils/utils'

export default function App() {

  const [task, setTask] = useState('');

  const [taskLists, setTaskLists] = useState(getList)
  const [isUpdate, setIsUpdate] = useState(false)
  const [currentID, setCurrentID] = useState(null)

  console.log('taskLists', taskLists)


  function handleInputChange(event) {
    if (!event) return
    setTask(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) return
    save(task)
    setTask("")
    setTaskLists(getList())
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    update(getById(currentID), task)
    setTaskLists(getList())
    setIsUpdate(false)
    setTask('')
  };



  function handleClear() {
    clearAll()
    setTaskLists([])
  }

  function handleRemove(id) {
    const filter = taskLists.filter(task => task.id !== id)
    remove(filter)
    setTaskLists(filter)
  }

  function handleEdit(id) {
    setTask(getById(id)?.value)
    setCurrentID(id)
    setIsUpdate(true)
  }

  return (
    <div className="App">
      <h1>Task List</h1>

      <div>
        <form
          onSubmit={(e) => {
            isUpdate ? handleUpdateSubmit(e) : handleSubmit(e);
          }}
        >
          <input
            name="task"
            placeholder="Enter the task"
            onChange={handleInputChange}
            value={task} />
          <button className="submit" type="submit" disabled={task ? false : true}>Submit</button>
        </form>

        <Lists tasks={taskLists} handleRemove={handleRemove} handleEdit={handleEdit} />

        <button className="clear" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

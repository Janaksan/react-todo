import { useState } from "react";
import "./App.css";
import Lists from "./Components/Lists/Lists";



import { get, createOrUpdate, clearAll, remove, getById } from './Utils/utils'

//generate unique id
const UUID = () => new Date().getTime();

export default function App() {

  //current item state
  const [item, setItem] = useState({ id: UUID(), value: '' });

  const [taskLists, setTaskLists] = useState(get())


  const handleSubmit = (e) => {
    e.preventDefault();

    if (item && item.value && item.value.trim()) {
      createOrUpdate(item.id, item.value.trim())

      //reseting current item after saved
      setItem({ id: UUID(), value: '' })
      //set latest list into local store
      setTaskLists(get())
    }
  };


  function handleClear() {
    clearAll()
    setTaskLists(get())
  }

  function handleRemove(id) {
    remove(id)
    setTaskLists(get())
  }

  function handleEdit(id) {
    const currentItem = getById(id)
    if (currentItem.id) {
      setItem({
        id: currentItem.id,
        value: currentItem.value
      })
    }
  }

  return (
    <div className="App">
      <h1>Task List</h1>

      <div>
        <form
          onSubmit={(e) => { handleSubmit(e) }}
        >
          <input
            name="task"
            placeholder="Enter the task"
            onChange={(e) => setItem({ id: item.id, value: e.target.value })}
            value={item.value} />

          <button className="submit" type="submit" disabled={item ? false : true}>Submit</button>
        </form>



        {
          taskLists && taskLists.length > 0 && (
            <>
              <Lists tasks={taskLists} handleRemove={handleRemove} handleEdit={handleEdit} />
              <button className="clear" onClick={handleClear}>Clear</button>
            </>
          )
        }

      </div>
    </div>
  );
}

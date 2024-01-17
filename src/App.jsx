import { useEffect, useState } from "react";
import { TaskAdd } from "./components/TaskAdd.jsx";
import "./App.css";
import { today } from "./constants.js";
import { DrawTask } from "./components/DrawTask/DrawTask.jsx";
import { CardTask } from "./components/CardTask.jsx";
import { CompletedTask } from "./components/DrawTask/CompletedTask.jsx";


function App() {

  const [completedTasks, setCompletedTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleCompleted = (index) => {
    const doneTask = tasks[index];
    deleteTask(index);
    setCompletedTasks([...completedTasks, doneTask]);
  };

  const handleDeleteCompletedTask = (index) => {
    const deletedCompletedTask = completedTasks[index];
    setCompletedTasks(completedTasks.filter((_, i) => i !== index))
    setTasks([...tasks, deletedCompletedTask])
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    let completedTasks = localStorage.getItem("completedTasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
    if(completedTasks){
      setCompletedTasks(JSON.parse(completedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
} , [completedTasks])

  //en react no se utilizan metodos mutables, por lo que no se puede utilizar push, pop, shift, unshift, etc, se usan metodos inmutables como map, filter, reduce, etc
  //de esta manera se actualizan los elementos ... spread operator crea una copia de un array y agrega un nuevo elemento ejem: array = [...array, newElement], a = [1,2,3] b = [...a, 4] b = [1,2,3,4] el array a no se modifica solo se crea una copia con el nuevo elemento
  const createNewTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <main>
        <div className="text-white">
          <h1 className="text-3xl font-semibold">Mi Día</h1>
          <small>{today}</small>
        </div>

        {tasks.length === 0 && completedTasks.length === 0 ? (
          <CardTask />
        ) : (
          tasks.map((task, index) => {
            return (
              <DrawTask
                key={index}
                value={task}
                deleteTask={() => {deleteTask(index)}}
                handleCompleted={() => {handleCompleted(index)}}
                completedTasks={completedTasks}
                handleDeleteCompletedTask={() => {handleDeleteCompletedTask(index)}}
              />
            );
          })
        )}

        {completedTasks.length > 0 && (
          <CompletedTask completedTasks={completedTasks} handleDeleteCompletedTask={handleDeleteCompletedTask} />
        )}
      </main>
      <TaskAdd createNewTask={createNewTask} />
    </>
  );
}

export default App;

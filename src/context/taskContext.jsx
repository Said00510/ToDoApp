import { createContext } from "react"
import { useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider ({children}) {

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

    return(
        <TaskContext.Provider value={{
          tasks,
          completedTasks,
          createNewTask,
          deleteTask,
          handleCompleted,
          handleDeleteCompletedTask
        }}>
          {children}
        </TaskContext.Provider>
    )
}
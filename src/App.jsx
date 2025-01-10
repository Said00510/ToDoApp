import { TaskAdd } from "./components/TaskAdd.jsx";
import { DrawTask } from "./components/DrawTask/DrawTask.jsx";
import { CardTask } from "./components/CardTask.jsx";
import { CompletedTask } from "./components/DrawTask/CompletedTask.jsx";
import { Header } from "./components/Header.jsx";
import { TaskContext } from "./context/taskContext.jsx";
import { useContext } from "react";


function App() {

  const {tasks , completedTasks, deleteTask, handleCompleted, handleDeleteCompletedTask} = useContext(TaskContext);

  return (
    <>
      <main className="px-6">
        <Header />

        {tasks.length === 0 && completedTasks.length === 0 ? (
          <CardTask />
        ) : (
          tasks.map((task, index) => {
            return (
              <DrawTask
                key={index}
                value={task}
                tasks={tasks}
                deleteTask={() => deleteTask(index)}
                handleCompleted={() => handleCompleted(index)}
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
      <TaskAdd />
    </>
  );
}

export default App;

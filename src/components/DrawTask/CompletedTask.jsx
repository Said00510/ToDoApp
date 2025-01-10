import { DrawTask } from "./DrawTask.jsx";
import PropTypes from "prop-types";

export function CompletedTask({handleDeleteCompletedTask, completedTasks}) {
  return (
    <div>
      <div className="flex gap-2 text-white my-4">
        <h2 className="font-semibold"> Tareas completadas</h2>
        <h3>{completedTasks.length > 0 ? completedTasks.length : ""}</h3>
      </div>
      <div>
        {completedTasks.map((task, index) => {
          return (
            <DrawTask
              key={index}
              value={task}
              handleCompleted={() => handleDeleteCompletedTask(index)}
              completedTasks={completedTasks}
              />
          );
        })}
      </div>
    </div>
  );
}

// CompletedTask.propTypes = {
//   completedTasks: PropTypes.array.isRequired,
//   handleDeleteCompletedTask: PropTypes.func.isRequired,
// };

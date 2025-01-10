import { CheckBox } from "./DrawCheckBox";
import Trash from "../../assets/svg/trash.svg";
import PropTypes from "prop-types";

export function DrawTask({ value, taskCompleted, deleteTask, handleCompleted, completedTasks, handleDeleteCompletedTask }) {

  // const date = new Date();
  const isCompleted = completedTasks?.includes(value)? "line-through" : "";
  const isCompletedButton = completedTasks?.includes(value) ? "opacity-0" : "";

  return (
    <>
      <div className="bg-[#393B3B] p-3 flex gap-x-3 my-4 rounded-lg text-white max-w-full items-center">
        <div className="flex flex-col gap-8">
          <button
            onClick={handleCompleted}   
            className={`flex justify-center items-center w-[20px]`}
          >
            <CheckBox  />
          </button>

              <button className={taskCompleted ? " " : isCompletedButton } onClick={deleteTask}>
              <img
                title="Eliminar tarea"
                className="cursor-pointer"
                src={Trash}
                alt=""
              />
            </button>

        </div>
        <div className="max-w-full">
          <p className={`break-words whitespace-normal pr-4 ${taskCompleted ? "" : isCompleted }`}>{value}</p>
          <small>Tareas </small>
        </div>
      </div>
    </>
  );
}


// DrawTask.propTypes = {
//   value: PropTypes.string.isRequired,
//   deleteTask: PropTypes.func.isRequired,
//   handleCompleted: PropTypes.func.isRequired,
//   completedTasks: PropTypes.array.isRequired,
//   handleDeleteCompletedTask: PropTypes.func.isRequired,
//   taskCompleted: PropTypes.string.isRequired,
// };

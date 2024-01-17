import { CheckBox } from "./DrawCheckBox";
import Trash from "../../assets/svg/trash.svg";
import PropTypes from "prop-types";

export function DrawTask({ value, deleteTask, handleCompleted, completedTasks}) {

  const isCompleted = completedTasks.includes(value) ? "line-through" : ""; 
  const isCompletedButton = completedTasks.includes(value) ? "opacity-0" : "";

  return (
    <>
      <div className="bg-[#393B3B] p-3 flex gap-8 my-4 rounded-lg text-white">
        <div className="flex flex-col gap-8">
          <button
            onClick={handleCompleted}   
            className={`flex justify-center items-center`}
          >
            <CheckBox  />
          </button>
          
              <button className={isCompletedButton} onClick={deleteTask}>
              <img
                title="Eliminar tarea"
                className="cursor-pointer"
                src={Trash}
                alt=""
              />
            </button>

        </div>
        <div>
          <p className={`${isCompleted}`}>{value}</p>
          <small>Tareas</small>
        </div>
      </div>
    </>
  );
}

DrawTask.propTypes = {
  value: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  handleCompleted: PropTypes.func.isRequired,
  completedTasks: PropTypes.array.isRequired,
  handleDeleteCompletedTask: PropTypes.func.isRequired,
};

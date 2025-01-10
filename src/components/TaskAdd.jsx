import { useContext, useState } from "react";
import Plus from "../assets/svg/plus.svg";
import PropTypes from "prop-types";
import { TaskContext } from "../context/taskContext";

export function TaskAdd() {
  const [value, setValue] = useState([""]);
  const { createNewTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("No puedes agregar una tarea vacia");
      return;
    }
    console.log({value})
    createNewTask(value);
    setValue("");
  };

  return (
    <footer className="fixed bottom-4 left-0 w-full ">
      <div className=" text-white rounded-sm bg-[#101111] p-4 hover:bg-[#2c2c2c] mx-2">
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <button>
            <img src={Plus} alt="" />
          </button>
          {/* onChange es un evento que se ejecuta cuando el valor de un input cambia */}
          <input
            onChange={(e) => setValue(e.target.value)}
            className="bg-transparent border-none w-full outline-none"
            type="text"
            placeholder="Agrega una nueva tarea"
            value={value}
          />
        </form>
      </div>
    </footer>
  );
}



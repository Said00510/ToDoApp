import { today } from "../constants.js";

export function Header(){
    return(
        <div className="text-white">
        <h1 className="text-3xl font-semibold">Mi Día</h1>
        <small>{today}</small>
      </div>
    )
}
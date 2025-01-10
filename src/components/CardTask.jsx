import Calendario from "../assets/img/calendario.png";

export function CardTask() {
  return (
    <div className="flex justify-center items-center mt-7">
      <div className="max-w-[300px] rounded-2xl backdrop-blur-md text-white p-6">
        <img className="mx-auto w-[150px] h-[150px]" src={Calendario} alt="Imagen de un calendario" />
        <div className="flex justify-center flex-col gap-2 items-center">
          <h3 className="text-2xl text-center font-normal">
            Concéntrate en tu dia
          </h3>
          <p className="text-center">
            Termina todas tus tareas diarias con Mi Día.
          </p>
        </div>
      </div>
    </div>
  );
}

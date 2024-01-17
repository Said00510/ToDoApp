const date = new Date();
const [day, dates, month, year] = [date.getDay(),date.getDate(), date.getMonth(), date.getFullYear()];

const days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

export const today = `${days[day]} ${dates} de ${months[month]} del ${year}`;
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TaskContextProvider } from "./context/taskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TaskContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TaskContextProvider>
);

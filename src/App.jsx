import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouting from "./App-Routing";

function App() {
  return (
    <>
      <BrowserRouter basename="/task-manager">
        <AppRouting />
      </BrowserRouter>
    </>
  );
}

export default App;

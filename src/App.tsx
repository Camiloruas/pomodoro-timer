import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext";
import "./styles/global.css";
import "./styles/theme.css";


export function App() {
  return (
    <TaskContextProvider>

    <Home />
    </TaskContextProvider>
);
}

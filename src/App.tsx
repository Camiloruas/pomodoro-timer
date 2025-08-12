import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import "./styles/global.css";
import "./styles/theme.css"; // Assuming this is for custom theme styles
import { MessagesContainer } from "./components/MessagesContainer";

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
  
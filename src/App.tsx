import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import "./styles/global.css";
import "./styles/theme.css"; // Assuming this is for custom theme styles
import { ToastContainer, Bounce } from 'react-toastify';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </TaskContextProvider>
  );
}

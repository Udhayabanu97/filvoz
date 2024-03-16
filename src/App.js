import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./pages/router/Routes";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;

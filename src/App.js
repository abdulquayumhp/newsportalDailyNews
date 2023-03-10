import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./router/Router/Router";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRootRoute } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";


const router = createRootRoute(routeTree);


const App = () => {

  return (
    <StrictMode>
     
      <RouterProvider router={router} />

    </StrictMode>
  );
    
 
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

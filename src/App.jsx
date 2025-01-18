import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";



const App = () => {
  return (
    <div>
      <h1>  Padre Gino's - Order Now</h1>
      <Pizza name="Margherita" description="A classic pizza" />
      <Pizza name="Capricciosa" description="A pizza with tomatoes and mozzarella" />
      <Pizza name="Funghi" description="A pizza with mushrooms and mozzarella" />
    </div>
  )
    
 
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

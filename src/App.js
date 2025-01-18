import React from "react";
import { createRoot } from "react-dom/client";  

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
    
  return React.createElement(
    "div",
    {},

    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "A classic pizza",
    }),
    React.createElement(Pizza, {
      name: "Capricciosa",
      description: "A pizza with tomatoes and mozzarella",
    }),
    React.createElement(Pizza, {
      name: "Funghi",
      description: "A pizza with mushrooms and mozzarella",
    }),
    React.createElement(Pizza, {
      name: "Prosciutto",
      description: "A pizza with prosciutto and mozzarella",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "A pizza with pepperoni and mozzarella",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "A pizza with ham and pineapple",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "A pizza with ham and pineapple",
    }),
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

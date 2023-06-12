import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading = React.createElement(
//   "h1",
//   { id: "title", key: "h2" },
//   "Namste React"
// );

// JSX Variable
// const heading = (
//   <h1 id="title" key="h1">
//     Namste React
//   </h1>
// );

// React Component
// - Functional Component - NEW
const Heading = () => (
  <h1 id="title" key="h1">
    Namste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      {/* You can write any piece of javascript here  */ Heading()}
      <Heading />
      <h1>Namster React</h1>
      <h2>This is Just H2 tag</h2>
    </div>
  );
};

// - Class Based Component - OLD

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

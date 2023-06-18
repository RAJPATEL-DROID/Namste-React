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
// const Heading = () => (
//   <h1 id="title" key="h1">
//     Namste React
//   </h1>
// );

// const HeaderComponent = () => {
//   return (
//     <div>
//       {/* You can write any piece of javascript here  */ Heading()}
//       {/* <Heading /> */}
//       <h1>Namster React</h1>
//       <h2>This is Just H2 tag</h2>
//     </div>
//   );
// };

// - Class Based Component - OLD

// const header = React.createElement(
//   "div",
//   { className: "Title", key: "title" },
//   [
//     React.createElement("h1", { key: "h1" }, "Hello H1"),
//     React.createElement("h2", { key: "h2" }, "Hello H2"),
//     React.createElement("h3", { key: "h3" }, "Hello H3"),
//   ]
// );

// const header2 = (
//   <div className="Title" key="title">
//     <h1 key="h1">This is h1</h1>
//     <h2 key="h2">This is h2</h2>
//     <h3 key="h3">This is h3</h3>
//   </div>
// );
const AnotherComponent = () => {
  return <h4 key="h4">This is h4</h4>;
};
const HeaderComponent = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{ color: "blue" }} key="h1">
        This is h1
      </h1>
      <h2>This is h2</h2>
      <AnotherComponent />
      <h3>This is h3</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

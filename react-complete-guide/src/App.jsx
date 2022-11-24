import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <ExpenseItem />
    </div>
  );
}

export default App;

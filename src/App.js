import "./App.css";

import { useEffect, useState } from "react";
function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Advices Application!</h1>
        <p>Hammer on the button below, to get new advice!!</p>
        <h2>{advice}</h2>
       <Message count= {count} ></Message>

        <p onClick={getAdvice} className="example2">Submit</p>
      </header>
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong >{props.count}</strong> pieces of advice
    </p>
  );
}

export default App;

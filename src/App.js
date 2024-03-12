import "./App.css";
import { useState } from "react";

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
function isComposite(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return true;
  }
  return false;
}

function App() {
  // useState hooks
  const [num, setNum] = useState(
    Array.from({ length: 100 }, (_, index) => index + 1)
  );
  let dummy_array = [];
  for(let i = 1;i<=100;i++){
    dummy_array.push(i);
  }

  // Temp array
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(i);
  }
  const GetEven = () => {
    arr = arr.filter((elem) => elem % 2 === 0);
    setNum(arr);
  };
  const GetOdd = () => {
    arr = arr.filter((elem) => elem % 2 !== 0);
    setNum(arr);
  };
  const GetPrime = () => {
    arr = arr.filter((elem) => isPrime(elem));
    setNum(arr);
  };
  const GetComposite = () => {
    arr = arr.filter((elem) => isComposite(elem));
    setNum(arr);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1 className="first-heading">Number-Filter App Using React</h1>
      </div>
      <div className="main-box">
        <h2 className="heading-array">Array of Number from 1 - 100</h2>
        <p id="array"> {dummy_array.join("  ")}</p>
      </div>
      <div className="main-box">
        <h2 className="heading-array">Filtered Array</h2>
        <p id="array"> {num.join("  ")}</p>
      </div>
      <div className="filter-btns">
        <button className="btn btn-even" onClick={GetEven}>
          Get Even Number
        </button>
        <button className="btn btn-odd" onClick={GetOdd}>
          Get Odd Number
        </button>
        <button className="btn btn-prime" onClick={GetPrime}>
          Get Prime Number
        </button>
        <button className="btn btn-composite" onClick={GetComposite}>
          Get Composite Number
        </button>
      </div>
    </div>
  );
}

export default App;

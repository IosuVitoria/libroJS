import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";

const ItemTypes = {
  NUMBER: "number",
};

const DraggableNumber = ({ number }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.NUMBER,
    item: { number },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`number ${isDragging ? "dragging" : ""}`}
    >
      {number}
    </div>
  );
};

const DropZone = ({ onDrop, currentNumber, label }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.NUMBER,
    drop: (item) => onDrop(item.number),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className={`drop-zone ${isOver ? "over" : ""}`} ref={drop}>
      <div className="drop-label">{label}</div>
      <div className="drop-content">
        {currentNumber !== null ? currentNumber : "Drop Here"}
      </div>
    </div>
  );
};

const FizzBuzzGrid = ({ fizz, buzz }) => {
  const getFizzBuzzValue = (number) => {
    if (number % fizz === 0 && number % buzz === 0) return "FizzBuzz";
    if (number % fizz === 0) return "Fizz";
    if (number % buzz === 0) return "Buzz";
    return number;
  };

  return (
    <div className="grid">
      {Array.from({ length: 100 }, (_, i) => i + 1).map((number) => (
        <div key={number} className="grid-item">
          {getFizzBuzzValue(number)}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [fizz, setFizz] = useState(null);
  const [buzz, setBuzz] = useState(null);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <h3 style={{textTransform: "uppercase"}}>FizzBuzz: Breve revisión de una prueba popular.</h3>

        <div className="lines-container">
          <div className="line">
            <h2>Selecciona el número para FIZZ</h2>
            <div className="numbers">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
                <DraggableNumber key={`fizz-${number}`} number={number} />
              ))}
            </div>
          </div>

          <div className="line">
            <h2>Selecciona para el número BUZZ</h2>
            <div className="numbers">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
                <DraggableNumber key={`buzz-${number}`} number={number} />
              ))}
            </div>
          </div>
        </div>

        <div className="drop-container">
          <DropZone onDrop={setFizz} currentNumber={fizz} label="Número Fizz" />
          <DropZone onDrop={setBuzz} currentNumber={buzz} label="Número Buzz" />
        </div>

        <FizzBuzzGrid fizz={fizz || 1} buzz={buzz || 1} />
      </div>
    </DndProvider>
  );
};

export default App;

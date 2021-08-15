import React from "react";
import Controls from "./components/Controls.js";
import TodosList from "./components/TodosList.js";
import Board from "./components/Board";
import "./App.css";
import { DragDropContext } from "react-beautiful-dnd";

function App(props) {
  return (
    <DragDropContext>
      <div className="App">
        <div className="Header">React Trello</div>
        <Controls />
        <Board />
      </div>
    </DragDropContext>
  );
}

export default App;

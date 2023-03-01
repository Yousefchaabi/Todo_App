import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function TaskList() {
  const toDos = useSelector((state) => state.todos);
  const [myState, setMyState] = useState("all");
  const handelAll = () => {
    setMyState("all");
  };
  const handelComplited = () => {
    setMyState("completed");
  };
  const handelNotComplited = () => {
    setMyState("notCompleted");
  };
  return (
    <div>
      <div className="cont-btn">
        <button className="completed" onClick={handelAll}>
          All
        </button>
        <button className="completed" onClick={handelComplited}>
          Complited
        </button>
        <button className="completed" onClick={handelNotComplited}>
          Not Complited
        </button>
      </div>
      {myState === "all"
        ? toDos.map((el) => <Task element={el} key={el.id} />)
        : myState === "completed"
        ? toDos
            .filter((el) => el.isDone === true)
            .map((el) => <Task element={el} key={el.id} />)
        : toDos
            .filter((el) => el.isDone === false)
            .map((el) => <Task element={el} key={el.id} />)}
    </div>
  );
}

export default TaskList;

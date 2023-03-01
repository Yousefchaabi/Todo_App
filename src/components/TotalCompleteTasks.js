import React from "react";
import { useSelector } from "react-redux";

function TotalCompleteTasks() {
  const completeTaks = useSelector((state) =>
    state.todos.filter((todo) => todo.isDone === true)
  );
  return (
    <h4 className="p-5 text-center">
      Total Complete Task : {completeTaks.length}
    </h4>
  );
}

export default TotalCompleteTasks;

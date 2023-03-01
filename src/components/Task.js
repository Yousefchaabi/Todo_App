import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isDone, deleteTask } from "../redux/actions";
import EditTask from "./EditTask";
import "../style/main.css";

function Task({ element }) {
  const [done, setDone] = useState(element.isDone);
  const dispatch = useDispatch();
  return (
    <div
      className="col-lg-7 p-4 m-5 mx-auto d-flex justify-content-between align-items-center"
      style={
        element.isDone
          ? {
              border: "1px solid rgb(71, 140, 219)",
              backgroundColor: "#B3E5BE",
            }
          : { border: "1px solid rgb(148, 7, 190)" }
      }
    >
      <h4
        style={
          element.isDone
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {element.description}
      </h4>

      <EditTask task={element} />

      <button
        onClick={() => dispatch(deleteTask(element.id))}
        className="btn btn-danger"
      >
        delete
      </button>
      <input
        type="checkbox"
        defaultChecked={done}
        id="scales"
        name="scales"
        onChange={() => {
          setDone(!done);
          dispatch(isDone(element.id));
        }}
      />
    </div>
  );
}

export default Task;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

function AddTask() {
  const [taskNew, setTaskNew] = useState({
    id: 0,
    description: "",
    isDone: false,
  });
  const dispatch = useDispatch();
  // const handelAdd = ()=>{
  //     dispatch(addTask(taskNew));
  //     setTaskNew({description:""})};
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(taskNew));
    setTaskNew({ description: "" });
  };
  return (
    <div className="container">
      <section className="mt-3 text-center">
        <h3>Enter Your Task </h3>

        <div className="col-lg-5 mx-auto">
          <form onSubmit={handelSubmit}>
            <input
              name="description"
              type="text"
              className="form-control"
              value={taskNew.description}
              onChange={(e) => {
                setTaskNew({
                  id: Math.floor(Math.random() * 100),
                  description: e.target.value,
                  isDone: false,
                });
              }}
            />
            <button
              disabled={!taskNew.description}
              className="completed mx-2 mt-3"
            >
              New Task
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddTask;

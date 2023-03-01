export const addTask = (newtask) => {
  return {
    type: "AddTask",
    payload: newtask,
  };
};

export const deleteTask = (id) => {
  return {
    type: "DeleteTask",
    payload: id,
  };
};

export const isDone = (id) => {
  return {
    type: "IsDone",
    payload: id,
  };
};

export const editTask = (id, description) => {
  return {
    type: "EditTask",
    payload: { id, description },
  };
};

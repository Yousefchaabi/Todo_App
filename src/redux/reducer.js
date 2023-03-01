let initialState = {
  todos: [
    {
      id: Math.floor(Math.random() * 100),
      description: "learn english for 1 hour",
      isDone: false,
    },
    {
      id: Math.floor(Math.random() * 100),
      description: "work out with friends",
      isDone: false,
    },
    {
      id: Math.floor(Math.random() * 100),
      description: "take a shower",
      isDone: true,
    },
    {
      id: Math.floor(Math.random() * 100),
      description: "eating food",
      isDone: false,
    },
    {
      id: Math.floor(Math.random() * 100),
      description: "Listen music ",
      isDone: true,
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "AddTask":
      return { ...state, todos: [...state.todos, payload] };
    case "DeleteTask":
      return { ...state, todos: state.todos.filter((el) => el.id !== payload) };
    case "IsDone":
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case "EditTask":
      return {
        ...state,
        todos: state.todos.map((el) =>
          el.id === payload.id
            ? { ...el, description: payload.description }
            : el
        ),
      };

    default:
      return state;
  }
};

export default reducer;

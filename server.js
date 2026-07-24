function reducer(state, action) {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  return state;
}

const state = {
  count: 1,
};

const action = {
  type: "increment",
};

const result = reducer(state, action);

console.log(result);

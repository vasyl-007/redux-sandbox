const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    default:
      return state;
  }
};

let state = reducer(undefined, {});

state = reducer(state, { type: "INCREMENT" });

console.log(state); // 1

state = reducer(state, { type: "INCREMENT" });

console.log(state); // 2

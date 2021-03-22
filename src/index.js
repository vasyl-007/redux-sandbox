console.log("Hello world!");

const initialState = 0;

const reducer = (state, action) => {

  if (action.type === "INCREMENT") {
    return state + 1;
  }
};

let state = reducer(initialState, { type: "INCREMENT" });

console.log(state); // 1

state = reducer(state, { type: "INCREMENT" });

console.log(state); // 2

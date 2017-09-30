import initStore from "@store/water/index.js";

const waterReducer = (state = initStore, action) => {
  switch (action.type) {
    case "MUTABLE_ANYTHIN":
      state = state.setIn(action.payload.entry, action.payload.value);
      break;
  }
  return state;
};

export default waterReducer;

import snackInitialState from "@store/snack/index.js";

const snack = (state = snackInitialState, action) => {
  switch (action.type) {
    case "SNACK_STATUS_TOGGLE":
      state = state.mergeIn(["status"], action.payload.value);
      console.log(state.toJS())
      break;
    case "SNACK_UPDATE_MESSAGELIST":
      state = state.setIn(["messageList"], action.payload.value);
      break;
  }
  return state;
};

export default snack;
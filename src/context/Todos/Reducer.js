import { SAVE_TODO, DELETE_TODO } from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_TODO:
      return state.concat({
        id: state.length,
        ...action.payload,
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducer;

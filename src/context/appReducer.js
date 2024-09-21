import appActions from "./actions";

export const initialState = {
  counter: 0,
};

export const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case appActions.increment: {
      return { ...state, counter: state.counter + payload };
    }
    case appActions.decrement: {
      return { ...state, counter: state.counter - payload };
    }
    default:
      return state;
  }
};

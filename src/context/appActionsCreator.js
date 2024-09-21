import appActions from "./actions";

export const increment = (payload) => {
  return {
    type: appActions.increment,
    payload,
  };
};

export const decrement = (payload) => {
  return {
    type: appActions.decrement,
    payload,
  };
};
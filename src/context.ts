type State = {
  key: null | string;
};

const initialState: State = {
  key: null,
};

const state = initialState;
const context = {
  set: (key: keyof State, value: State[typeof key]) => {
    state[key] = value;
  },
  getState: () => state,
};

export default context;

type State = {
  key: null | string;
};

const initialState: State = {
  key: null,
};

const state = initialState;
const context = {
  set: (key: keyof State, value: State[typeof key]): void => {
    state[key] = value;
  },
  getState: (): State => state,
};

export default context;

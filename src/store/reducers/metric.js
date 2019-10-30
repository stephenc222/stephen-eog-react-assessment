import * as actions from "../actions";

const initialState = {
};


const metricDataReceived = (state, action) => {
  const { payload } = action
  // from payload, if latest is in state, then replace, else push
  if (state.metric) {
    return {
      [state.metric]: {
        ...state,
      },
      [payload.metric]: {
        ...payload
      }
    }
  }

  const nextState = {
    ...state,
    [payload.metric]: {
      ...payload
    }
  }
  return { ...nextState }
};

const handlers = {
  [actions.METRIC_DATA_RECEIVED]: metricDataReceived
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};

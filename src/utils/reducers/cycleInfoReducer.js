import {
  FETCH_CYCLE_INFO_BEGIN,
  FETCH_CYCLE_INFO_SUCCESS,
  FETCH_CYCLE_INFO_FAILURE,
  CLEAR_CYCLE_INFO,
} from "../types";

const initialState = {
  loadingCycleInfo: true,
  errorCycleInfo: null,
  cycleInfo: [],
};

function cycleInfo(state = initialState, action) {
  switch (action.type) {
    case FETCH_CYCLE_INFO_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loadingCycleInfo: true,
        errorCycleInfo: null,
      };

    case FETCH_CYCLE_INFO_SUCCESS:
      return {
        ...state,
        loadingCycleInfo: false,
        cycleInfo: [action.payload.data],
      };

    case FETCH_CYCLE_INFO_FAILURE:
      return {
        ...state,
        loadingCycleInfo: false,
        errorCycleInfo: action.payload.error,
        cycleInfo: [],
      };

    case CLEAR_CYCLE_INFO:
      return {
        ...state,
        loadingCycleInfo: false,
        errorCycleInfo: null,
        cycleInfo: [],
      };

    default:
      return state;
  }
}

export default cycleInfo;

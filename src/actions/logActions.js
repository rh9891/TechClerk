import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";

// Gets logs from the server.
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("./logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Adds new log entry.
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("./logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Deletes log entry from server.
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Updates log entry on server.
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// Sets current log entry data.
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// Clears current log entry data.
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Sets loading to true.
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

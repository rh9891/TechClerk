import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from "./types";
import axios from "axios";

// Gets logs from the server.
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get("/api/logs");

    dispatch({
      type: GET_LOGS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Adds new log entry.
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/logs", log, config);

    dispatch({
      type: ADD_LOG,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Deletes log entry from server.
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`/api/logs/${id}`);

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Updates log entry on server.
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(`/api/logs/${log._id}`, log, config);

    dispatch({
      type: UPDATE_LOG,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Searches logs on the server.
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get(`/api/logs/${text}`);

    dispatch({
      type: SEARCH_LOGS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
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

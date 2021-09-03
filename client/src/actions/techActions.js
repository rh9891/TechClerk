import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";
import axios from "axios";

// Gets techs from server.
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get("/api/techs");

    dispatch({
      type: GET_TECHS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Adds tech to server.
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/techs", tech, config);

    dispatch({
      type: ADD_TECH,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Deletes tech from server.
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`/api/techs/${id}`);

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Sets loading to true.
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

import axios from "axios";
import { FAIL, SUCCESS } from "../restConstants";

// api to access all restaurant data

export const getList = async (dispatch) => {
  try {
    const result = await axios.get("/kochi.json");
    console.log("result", result.data.kochi);
    dispatch({
      payload: result.data.kochi,
      type: SUCCESS,
    });
  } 
  catch (error) {
    dispatch({
      payload: error,
      type: FAIL,
    });
  }
};

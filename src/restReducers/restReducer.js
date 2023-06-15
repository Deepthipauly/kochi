import { FAIL, SUCCESS } from "../restConstants";


// reducer

export const siteReducer = (state = { placeList: [] }, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        placeList: action.payload,
      };

    case FAIL:
      return {
        placeList: action.payload,
      };

    default:
      return state;
  }
};


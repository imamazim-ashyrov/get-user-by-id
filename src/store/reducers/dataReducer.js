import {
  REMOVE_USER,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../actions/dataAction";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const dataReducer = (state = initialState, action) => {
  console.log(action);

  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case REMOVE_USER:
      console.log(`User by ID ${payload} was deleted`);
      
      return { ...state, data: state.data.filter((el) => el.id !== payload) };
    default:
      return state;
  }
};

export default dataReducer;


export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const REMOVE_USER = "REMOVE_USER";

export const fetchDataRequest = () => {
  console.log("start loading");

  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  console.log("end loading");
  console.log("success");

  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataError = (error) => {
  console.log("end loading");
  console.log("error");

  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const removeUser = (payload) => {
  return {
    type: REMOVE_USER,
    payload,
  };
};

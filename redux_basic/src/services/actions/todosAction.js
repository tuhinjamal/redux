import axios from "axios";
import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
} from "../constants/todosConstant";
const getAllTodos = () => {
  return async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch({ type: GET_TODOS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_TODOS_FAILURE, payload: error.message });
    }
  };
};

export { getAllTodos };

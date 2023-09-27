import * as types from "./actionType";
const initState = {
  products: [],
  loading: false,
  error: false,
};

export const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_PENDING:
      return {
        ...state,
        loading: true,
      };
    case types.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
      case types.GET_PRODUCT: return{
        ...state,
        loading: false,
        error: false,
        products: payload,
      }
      case types.ADD_PRODUC: return{
        ...state,
        loading : false,
        error: false,
        products: payload
      }
    default:
      return state;
  }
};

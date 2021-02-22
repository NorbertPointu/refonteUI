// https://medium.com/swlh/fetching-api-data-with-react-hooks-hoc-or-render-prop-ec6b37aa5a87

export const defaultState = {
  responseData: null,
  isFetching: true,
  error: null
};

export const reducer1 = (state, action) => {
  switch (action.type) {
    case 'fetched':
      return {
        ...state,
        isFetching: false,
        responseData: action.payload
      };
    case 'error':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return false;
  }
}

const aiaWrapper = (state = {}, action) => {
  switch (action.type) {
    case 'init':
      state.useAxios = (localStorage.getItem('useAxios') === 'true');
    // eslint-disable-next-line no-fallthrough
    case 'query_reset':
      state.query = { count: 0, countSuccess: 0, countError: 0 };
      break;
    case 'toggle':
      state.useAxios = !state.useAxios;
      // eslint-disable-next-line global-require,no-case-declarations
      const aia = require('../plugins/aia');
      aia.default.useAxios(state.useAxios);
      break;
    case 'query_start':
      state.query.count += 1;
      break;
    case 'query_end':
      // state.query.count -= 1;
      if (action.payload.success) state.query.countSuccess += 1;
      if (action.payload.error) state.query.countError += 1;
      break;
    default:
  }
  return state;
}

export default aiaWrapper;

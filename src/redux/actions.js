// redux/actions.js
export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});

export const toggleDarkMode = () => ({
  type: 'TOGGLE_DARK_MODE',
});
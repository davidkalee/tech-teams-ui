export default function (state = [], action) {
  switch (action.type) {
    case 'UPDATE_PROF_TECH_SKILL':
      return action.payload;
    default:
      return state;
  }
  return state;
}

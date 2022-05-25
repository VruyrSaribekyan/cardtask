//reducer 
const cardAdd = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload.id];
    case "delete":
      return state.filter((item, i) =>
        item === action.payload.id ? console.log(item) : i
      );
    case "sort":
      return [...state].sort((a, b) => a - b);
    default:
      return state;
  }
};
export default cardAdd;

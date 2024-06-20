let initialState = {
    css:"flex w-3 h-3 bg-red-500 rounded-full float-right mt-1 md:float-right md:mt-1",
    tooltip: "Server is down"
}

const SERVER_UP = 'SERVER_UP';
const SERVER_DOWN = 'SERVER_DOWN';

const serverReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVER_UP:
      return {
        css: "flex w-3 h-3 bg-green-500 rounded-full float-right mt-1 md:float-right md:mt-1",
        tooltip: "Server is up"
      };
    case SERVER_DOWN:
      return {
        css: "flex w-3 h-3 bg-red-500 rounded-full float-right mt-1 md:float-right md:mt-1",
        tooltip: "Server is down"
      };
    default:
      return state;
  }
};


export default serverReducer;


const initialState = {
    isLoggedIn: false,
    isAdmin: false
  };
  
  const loginReducer = (state = initialState, action) => {
    let data = JSON.parse(localStorage.getItem("syfLoggedInUser"));
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true,
          isAdmin: data.admin
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
          isAdmin: false
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  
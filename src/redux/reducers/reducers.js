const initialstate = {
  allMovies: [],
  moviesId: {},
  loading: false,
};

const reducers = (state = initialstate, action) => {
  switch (action.type) {
    case "ALLMOVIES":
      return {
        ...state,
        allMovies: [...action.value],
      };
    case "LOADSTART":
      return {
        ...state,
        loading: true,
      };
    case "LOADEND":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducers;

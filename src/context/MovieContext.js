import { createContext, useReducer } from "react";
import { moviesData } from "../data/data";

const MovieList = moviesData;

const initialMovieState = {
  movies: MovieList,
};

const MovieReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.id) {
            return { ...movie, isBookmarked: !movie.isBookmarked };
          }
          return movie;
        }),
      };
  }
};

export const MovieContext = createContext({
  state: initialMovieState,
  dispatch: () => {},
});

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, initialMovieState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import MovieList from "../movie-list/MovieList";
import { MovieContext } from "../context/MovieContext";

const Bookmark = () => {
  const [SearchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  const { state } = useContext(MovieContext);
  console.log(state);
  const { movies } = state;
  const bookmarks = movies.filter((movie) => movie.isBookmarked);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.value.toLowerCase(); // Convert input value to lowercase
    setSearchValue(inputValue); // Update state with the lowercase value
    const newList = movies.filter(
      (movie) => movie.title.toLowerCase().includes(inputValue) // Compare with lowercase title
    );
    setSearchList(newList);
  };

  return (
    <Layout>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "default",
          border: "none",
          p: 1,
          backgroundColor: "#00261d",
        }}
      >
        <InputBase
          placeholder="Search for movies or TV series"
          sx={{
            ml: 1,
            flex: 1,
            color: "white",
            border: "none",
          }}
          value={SearchValue}
          onChange={handleSearch}
          startAdornment={
            <InputAdornment position="start" sx={{ color: "white" }}>
              <Search />
            </InputAdornment>
          }
        />
      </Paper>
      <Box py={2} px={4}>
        {SearchValue === "" ? (
          <Box width="100%">
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              Bookmarks
            </Typography>
            <MovieList enableScroll={false} recommendList={bookmarks} />
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{SearchValue}" {""}
            </Typography>
            <MovieList recommendList={searchList} enableScroll={false} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Bookmark;

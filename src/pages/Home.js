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
import MovieTrendList from "../movie-list/MovieTrendList";
import MovieList from "../movie-list/MovieList";
import { MovieContext } from "../context/MovieContext";

const Home = () => {
  const [SearchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  const { state } = useContext(MovieContext);
  console.log(state);
  const { movies } = state;
  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommendList = movies.filter((item) => item.isTrending !== true);

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
          border: "none",
          p: 1,
          backgroundColor: "#00261d",
        }}
      >
        <InputBase
          placeholder="Search for Movies or TV series..."
          sx={{
            ml: 1,
            flex: 1,
            color: "white",
            border: "none",
          }}
          value={SearchValue}
          onChange={handleSearch}
          startAdornment={
            <InputAdornment position="start" sx={{ color: "#E0E0E0" }}>
              <Search />
            </InputAdornment>
          }
        />
      </Paper>
      <Box py={2} px={4}>
        {SearchValue === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Trending List
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Recommended For You
              </Typography>
              <MovieList recommendList={recommendList} enableScroll={true} />
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{SearchValue}"
            </Typography>
            <MovieList recommendList={searchList} enableScroll={false} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;

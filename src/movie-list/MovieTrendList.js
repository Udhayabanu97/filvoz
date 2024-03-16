import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import {
  Bookmark,
  BookmarkBorder,
  LiveTv,
  Theaters,
} from "@mui/icons-material";

const MovieTrendList = ({ trendingList }) => {
  console.log("The trendingList is :", trendingList);
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id) => {
    dispatch({ type: "TOGGLE BOOKMARK", id });
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {trendingList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <Card elevation={0} sx={{ backgroundColor: "transparent" }}>
              <CardContent
                sx={{
                  padding: 0,
                  position: "relative",
                  display: { xs: "block", sm: "block" },
                }}
              >
                <Box
                  component="img"
                  src={movie.thumbnail}
                  alt={movie.title}
                  sx={{
                    width: "300px",
                    height: "100%",
                    borderRadius: "8px",
                    display: { xs: "block", sm: "block" },
                  }}
                />
                <Box
                  position="absolute"
                  top={0}
                  bottom={23}
                  left={0}
                  right={0}
                  bgcolor="rgba(0,0,0,0.6)"
                  borderRadius="8px"
                />
                <Stack
                  mt={6}
                  spacing={0}
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={4}
                >
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography
                        fontSize={10}
                        color="#E0E0E0"
                        arial-label="Year of movie"
                      >
                        {movie.year}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Box
                        sx={{
                          width: "1rem",
                          height: "1rem",
                          bg: "#E0E0E0",
                          borderRadius: "full",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      {movie.category === "Movie" ? (
                        <Theaters
                          style={{ color: "#E0E0E0", width: 16, height: 14 }}
                        />
                      ) : (
                        <LiveTv
                          style={{ color: "#E0E0E0", width: 16, height: 16 }}
                        />
                      )}
                    </Grid>
                    <Grid item>
                      <Typography
                        fontSize={10}
                        color="#E0E0E0"
                        arial-label="movie category"
                      >
                        {movie.category}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Box
                        sx={{
                          width: "1rem",
                          height: "1rem",
                          bg: "#E0E0E0",
                          borderRadius: "full",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        fontSize={10}
                        color="#E0E0E0"
                        arial-label="movie rating"
                      >
                        {movie.rating}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        color="#E0E0E0"
                        padding={0}
                        arial-label="movie title"
                      >
                        {movie.title}
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "14px",
                  }}
                >
                  <Box
                    sx={{
                      p: "0.9rem",
                      backgroundColor: "black",
                      borderRadius: "100%",
                      cursor: "pointer",
                      "&: hover": { opacity: 0.7 },
                    }}
                    onClick={() => handleToggleBookmark(movie.id)}
                  >
                    {movie.isBookmarked ? (
                      <Bookmark style={{ color: "#E0E0E0" }} />
                    ) : (
                      <BookmarkBorder style={{ color: "#E0E0E0" }} />
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default MovieTrendList;

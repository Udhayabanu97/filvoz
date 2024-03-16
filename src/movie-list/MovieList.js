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

const MovieList = ({ recommendList, enableScroll }) => {
  console.log("The recommendList is :", recommendList);
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id) => {
    dispatch({ type: "TOGGLE BOOKMARK", id });
  };

  return enableScroll ? (
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
      {recommendList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <Card
              variant="outlined"
              sx={{
                bgcolor: "transparent",
                color: "#E0E0E0",
                my: 3,
                border: "none",
              }}
            >
              <CardContent sx={{ p: 0, position: "relative" }}>
                <Grid container spacing={1}>
                  <Grid item>
                    <Box
                      component="img"
                      src={movie.thumbnail}
                      alt={movie.name}
                      sx={{
                        width: "400px",
                        height: "220px",
                        borderRadius: "8px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <Typography fontSize={10} arial-label="Year of movie">
                          {movie.year}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Box
                          sx={{
                            width: "4px",
                            height: "4px",
                            background: "#BDBDBD",
                            borderRadius: "50%",
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
                        <Typography fontSize={10} arial-label="movie category">
                          {movie.category}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Box
                          sx={{
                            width: "4px",
                            height: "4px",
                            background: "#BDBDBD",
                            borderRadius: "50%",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography fontSize={10} arial-label="movie rating">
                          {movie.rating}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography padding={0} arial-label="movie title">
                          {movie.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
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
  ) : (
    <Grid container spacing={2}>
      {recommendList.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={4}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <Card
              variant="outlined"
              sx={{
                bgcolor: "transparent",
                color: "#E0E0E0",
                my: 3,
                border: "none",
              }}
            >
              <CardContent sx={{ p: 0, position: "relative" }}>
                <Grid container spacing={1}>
                  <Grid item>
                    <Box
                      component="img"
                      src={movie.thumbnail}
                      alt={movie.name}
                      sx={{
                        width: "400px",
                        height: "220px",
                        borderRadius: "8px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Grid container spacing={1} alignItems="center">
                      <Grid item>
                        <Typography fontSize={10} arial-label="Year of movie">
                          {movie.year}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Box
                          sx={{
                            width: "4px",
                            height: "4px",
                            background: "#BDBDBD",
                            borderRadius: "50%",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        {movie.category === "Movie" ? (
                          <Theaters
                            style={{
                              color: "#E0E0E0",
                              width: 16,
                              height: 14,
                            }}
                          />
                        ) : (
                          <LiveTv
                            style={{
                              color: "#E0E0E0",
                              width: 16,
                              height: 16,
                            }}
                          />
                        )}
                      </Grid>
                      <Grid item>
                        <Typography fontSize={10} arial-label="movie category">
                          {movie.category}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Box
                          sx={{
                            width: "4px",
                            height: "4px",
                            background: "#BDBDBD",
                            borderRadius: "50%",
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography fontSize={10} arial-label="movie rating">
                          {movie.rating}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography padding={0} arial-label="movie title">
                          {movie.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
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
    </Grid>
  );
};

export default MovieList;

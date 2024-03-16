import { Bookmark, LiveTv, Movie, Window } from "@mui/icons-material";
import { Box, Hidden, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    icon: <Window />,
    link: "/",
  },
  {
    name: "Movies",
    icon: <Movie />,
    link: "/movies",
  },
  {
    name: "Tv Series",
    icon: <LiveTv />,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: <Bookmark />,
    link: "/bookmark",
  },
];
const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "#003933",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          xs: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
          gap: 5,
        }}
      >
        <Hidden smDown>
          <Typography
            variant="h5"
            component="h1"
            my={2}
            mx={2}
            fontWeight={500}
            textDecoration
            fontSize={26}
          >
            FILVOZ
          </Typography>
        </Hidden>
        <Box
          sx={{
            py: {
              xs: "none",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                  "&:hover": {
                    filter: "brightness(91%)",
                  },
                }}
              >
                <i
                  style={{
                    width: "18px",
                    filter: `${
                      pathname === item.link
                        ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(93%) contrast(87%)"
                        : "invert(8%)"
                    }`,
                  }}
                >
                  {item.icon}
                </i>
                <Hidden mdDown>
                  <Typography>{item.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;

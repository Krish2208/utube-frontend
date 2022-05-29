import React from "react";
import Navbar from "./Navbar";
import { Grid, Typography, Card, CardContent, CardHeader } from "@mui/material";
import { useLocation } from "react-router-dom";
import VideoCard from "./card";
import "./videos.css";
import Graph from "./graph";

export default function Videos() {
  const { state } = useLocation();
  return (
    <div sx={{ height: "100vh" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <Typography variant="h3">{state.channel}</Typography>
      </div>
      <Grid container component="main">
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <div className="videos">
            <Grid container component="main">
              {state.videos.map((item, i)=> <VideoCard key={i} value={item}/>)}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

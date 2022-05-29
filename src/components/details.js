import React from "react";
import Navbar from "./Navbar";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Paper,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import CommentCard from "./commentCard";
import "./videos.css";

export default function Details() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <Typography
          noWrap
          variant="h5"
          sx={{ marginX: 4, maxWidth: "90vw", textDecoration: "none" }}
        >
          <a
            href={`https://www.youtube.com/watch?v=${state.id}`}
            target="_blank"
            style={{ textDecoration: "none", color: "#060d2a" }}
          >
            {state.title}
          </a>
        </Typography>
      </div>
      <div>
        <Grid container component="main">
          <Grid
            item
            xs={12}
            sm={3}
            justifyItems="center"
            justifyContent="center"
          >
            <center>
              <Card
                sx={{
                  marginX: 3,
                  background:
                    "linear-gradient(135deg, rgb(6,13,42) 0%, rgb(51,69,167) 100%)",
                  color: "white",
                  border: 3,
                  borderColor: "#060D2A",
                  height: "150px",
                }}
                elevation={6}
              >
                <CardHeader title="Like Count" />
                <CardContent>
                  <Typography variant="h6">{state.stats.likes}</Typography>
                </CardContent>
              </Card>
            </center>
          </Grid>
          <Grid item xs={12} sm={3}>
            <center>
              <Card
                sx={{
                  marginX: 3,
                  background:
                    "linear-gradient(135deg, rgb(6,13,42) 0%, rgb(51,69,167) 100%)",
                  color: "white",
                  border: 3,
                  borderColor: "#060D2A",
                  height: "150px",
                }}
                elevation={6}
              >
                <CardHeader title="View Count" />
                <CardContent>
                  <Typography variant="h6">{state.stats.views}</Typography>
                </CardContent>
              </Card>
            </center>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justifyItems="center"
            justifyContent="center"
          >
            <center>
              <Card
                sx={{
                  height: "150px",
                  marginX: 3,
                  background:
                    "linear-gradient(135deg, rgb(6,13,42) 0%, rgb(51,69,167) 100%)",
                  color: "white",
                  border: 3,
                  borderColor: "#060D2A",
                }}
                elevation={6}
              >
                <CardHeader title="Comment Count" />
                <CardContent>
                  {/* {state.stats.comments} */}
                  <Grid container component="main" sx={{justifyContent: "space-evenly", justifyItems: "space-evenly"}}>
                    {state.comment_stats.Positive != 0 ? (
                      <Grid
                        item
                        justifyItems="center"
                        justifyContent="center"
                      >
                        <Grid container component="main">
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            Positive
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            {state.comment_stats.Positive}
                          </Grid>
                        </Grid>
                      </Grid>
                    ) : (
                      <></>
                    )}
                    {state.comment_stats.Negative != 0 ? (
                      <Grid
                        item
                        justifyItems="center"
                        justifyContent="center"
                      >
                        <Grid container component="main">
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            Negative
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            {state.comment_stats.Negative}
                          </Grid>
                        </Grid>
                      </Grid>
                    ) : (
                      <></>
                    )}
                    {state.comment_stats.Imperative != 0 ? (
                      <Grid
                        item
                        justifyItems="center"
                        justifyContent="center"
                      >
                        <Grid container component="main">
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            Imperative
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            {state.comment_stats.Imperative}
                          </Grid>
                        </Grid>
                      </Grid>
                    ) : (
                      <></>
                    )}
                    {state.comment_stats.Interogative != 0 ? (
                      <Grid
                        item
                        justifyItems="center"
                        justifyContent="center"
                      >
                        <Grid container component="main">
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            Interogative
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            {state.comment_stats.Interogative}
                          </Grid>
                        </Grid>
                      </Grid>
                    ) : (
                      <></>
                    )}
                    {state.comment_stats.Corrective != 0 ? (
                      <Grid
                        item
                        justifyItems="center"
                        justifyContent="center"
                      >
                        <Grid container component="main">
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            Corrective
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            {state.comment_stats.Corrective}
                          </Grid>
                        </Grid>
                      </Grid>
                    ) : (
                      <></>
                    )}
                    {state.comment_stats.Misc != 0 ? (
                      <Grid
                        item
                        justifyItems="center"
                        justifyContent="center"
                      >
                        <Grid container component="main">
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            Misc.
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            justifyItems="center"
                            justifyContent="center"
                          >
                            {state.comment_stats.Misc}
                          </Grid>
                        </Grid>
                      </Grid>
                    ) : (
                      <></>
                    )}
                  </Grid>
                </CardContent>
              </Card>
            </center>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Grid container component="main">
          <Grid
            item
            xs={12}
            sm={6}
            justifyItems="center"
            justifyContent="center"
          >
            <Card
              sx={{
                marginX: 3,
                background: "#fff",
                color: "white",
                border: 3,
                borderColor: "#060D2A",
                height: "45vh",
              }}
              elevation={6}
            >
              <center>
                <Grid sx={{ background: "#060D2A" }}>
                  <CardHeader title="Description" />
                </Grid>
              </center>
              <CardContent className="comments">
                <Card
                  sx={{
                    paddingX: 2,
                    paddingY: 1,
                    textAlign: "justify",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {state.description}
                </Card>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justifyItems="center"
            justifyContent="center"
          >
            <Card
              sx={{
                marginX: 3,
                background: "#fff",
                color: "white",
                border: 3,
                borderColor: "#060D2A",
                height: "45vh",
              }}
              elevation={6}
            >
              <Grid sx={{ background: "#060D2A" }}>
                <center>
                  <CardHeader title="Comments" />
                </center>
              </Grid>
              <CardContent className="comments">
                {state.comments.map((item, i) => (
                  <CommentCard key={i} value={item} />
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

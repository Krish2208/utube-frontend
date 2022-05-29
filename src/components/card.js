import React from "react";
import { Card, CardHeader, CardContent, Grid, Typography } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function VideoCard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    var config = {
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .get("https://utube-backend-ml-leopard.herokuapp.com/comments", { params: { id: props.value.Id } }, config)
      .then((res) => {
        if (res.status === 200) {
          const details = {
            comments: res.data.comments,
            stats: res.data.stats,
            title: props.value.Title,
            description: res.data.description,
            comment_stats: res.data.sentiment_stats,
            id: props.value.Id,
          };
          navigate("/details", { state : details });
        } else {
          console.log("failed");
        }
      })
      .catch(() => {
        console.log("failed 2");
      });
  };
  return (
    <Grid item xs={12} sm={3} justifyItems="center" justifyContent="center">
      <Card
        onClick={handleClick}
        sx={{
          height: "280px",
          marginX: 3,
          marginBottom: 5,
          backgroundImage: `url(${props.value.Thumbnail})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "white",
        }}
        elevation={6}
      >
        <Grid sx={{ backgroundColor: "#000000dd", fontSize: "2px" }}>
          <Typography variant="body2">
            <center>{props.value.Title}</center>
          </Typography>
        </Grid>
      </Card>
    </Grid>
  );
}

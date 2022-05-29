import { React, useState } from "react";
import background from "../background.jpg";
import logo from "../utube.png";
import "./home.css";
import { IconButton, InputBase, Paper, Snackbar, Alert } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [showAlert, setAlert] = useState(false);
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const handleSubmit = () => {
    console.log(url);
    var config = {
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .get("http://127.0.0.1:5000/videos", { params: { url: url } }, config)
      .then((res) => {
        if (res.status === 200) {
          if (!res.data.error) {
            const state = {
              videos: res.data.videos,
              channel: res.data.channel,
            };
            navigate("/videos", { state: state });
          } else {
            setAlert(true);
          }
        } else {
          console.log("failed");
          setAlert(true);
        }
      })
      .catch(() => {
        console.log("failed 2");
        setAlert(true);
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "100vw 100vh",
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showAlert}
      >
        <Alert variant="filled" severity="error" elevation={10}>
          Invalid URL! Please Enter Valid Youtube Channel URL(Preferably American)
        </Alert>
      </Snackbar>
      <img
        src={require("../utube.png")}
        style={{
          position: "absolute",
          height: "10vh",
          padding: "10px",
          left: "40%",
          top: "30%",
        }}
      />
      <img src={require("../ML Leopards.png")} style={{
          position: "absolute",
          height: "30vh",
          padding: "10px",
          left: "85%",
          top: "85%",
        }}/>
      <div class="center">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "50vw",
            borderRadius: 50,
            border: 5,
            borderColor: "#757575",
          }}
        >
          <InputBase
            sx={{ ml: 1, width: "50vw", background: "white" }}
            placeholder="Enter the URL of your Youtube Channel"
            onSubmit={handleSubmit}
            onChange={(e) => setUrl(e.target.value)}
          />
          <IconButton
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSubmit}
          >
            <Search />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}

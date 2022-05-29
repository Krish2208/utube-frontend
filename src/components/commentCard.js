import {
  CloseRounded,
  QuestionMark,
  PriorityHigh,
  Done,
  DiscFull,
  WorkOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  Tooltip,
  Zoom,
  Typography,
} from "@mui/material";
import React from "react";

const IconRender = (cat) => {
  switch (cat) {
    case "Positive":
      return (
        <Avatar sx={{ backgroundColor: "#5CB660" }}>
          <Done sx={{ color: "#fff" }} />
        </Avatar>
      );
    case "Negative":
      return (
        <Avatar sx={{ backgroundColor: "#d9534f" }}>
          <CloseRounded sx={{ color: "#fff" }} />
        </Avatar>
      );
    case "Imperative":
      return (
        <Avatar sx={{ backgroundColor: "#FFA117" }}>
          <DiscFull sx={{ color: "#fff" }} />
        </Avatar>
      );
    case "Interogative":
      return (
        <Avatar sx={{ backgroundColor: "#0275db" }}>
          <QuestionMark sx={{ color: "#fff" }} />
        </Avatar>
      );
    case "Corrective":
      return (
        <Avatar sx={{ backgroundColor: "#f0ad4e" }}>
          <PriorityHigh sx={{ color: "#fff" }} />
        </Avatar>
      );
    case "Misc.":
      return <Avatar sx={{ backgroundColor: "#060d2a" }}>/</Avatar>;
    default:
      return <Avatar sx={{ backgroundColor: "#060d2a" }}>/</Avatar>;
  }
};

export default function CommentCard(props) {
  return (
    <div>
      <Card sx={{ marginY: "5px" }}>
        <CardHeader
          avatar={IconRender(props.value.sentiment)}
          title={
            <Tooltip arrow title={props.value.comment} TransitionComponent={Zoom}>
              <Typography
                variant="body1"
                noWrap
                sx={{
                  maxWidth: "35vw",
                }}
              >
                {props.value.comment}
              </Typography>
            </Tooltip>
          }
          subheader={props.value.sentiment}
        />
      </Card>
    </div>
  );
}

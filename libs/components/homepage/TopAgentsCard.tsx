import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopAgentsCard = () => {
  return (
    <Stack className={"top-agents-card"}>
      <Box
        className={"card-img"}
        style={{
          backgroundImage: `url("/img/agent.jpg")`,
        }}
      >
        <div>$10</div>
      </Box>
    </Stack>
  );
};

export default TopAgentsCard;

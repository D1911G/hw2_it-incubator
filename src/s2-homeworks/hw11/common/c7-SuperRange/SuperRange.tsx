import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        color: "#00cc22",
        width: 300,
        "& .MuiSlider-thumb": {
          width: 24,
          height: 24,
          backgroundColor: "#fff",
          border: "2px solid #00cc22",
          "&::before": {
            content: '""',
            position: "absolute",
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "#00cc22",
          },
        },
        "& .MuiSlider-track": {
          backgroundColor: "#00cc22",
          border: "none",
        },
        "& .MuiSlider-rail": {
          backgroundColor: "#999",
        },
      }}
      {...props}
    />
  );
};

export default SuperRange;

import React from "react";
import { Grid, Paper } from "@mui/material";

const CustomizedGrid = ({ items }) => {
  return <Grid container>{items.map((item) => item)}</Grid>;
};

export default CustomizedGrid;

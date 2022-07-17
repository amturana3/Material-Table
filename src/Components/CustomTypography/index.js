import React from "react";
import Typography from "@mui/material/Typography";

const CustomTypography = ({ variant, component, content }) => {
  return (
    <Typography variant={variant} component={component} gutterBottom>
      {content}
    </Typography>
  );
};

export default CustomTypography;

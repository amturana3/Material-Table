import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CustomSelect = ({ options, value, label, handleChange }) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        label
        onChange={handleChange}
      >
        {options.map((elem, index) => (
          <MenuItem key={index} value={elem.value}>
            {elem.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;

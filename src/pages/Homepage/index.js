import React, { useEffect, useState } from "react";
import CustomSelect from "../../Components/CustomSelect";
import { genderOptions } from "../../utils";
import Tooltip from "@mui/material/Tooltip";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../../store/users/userActions";
import CustomSnackbar from "../../Components/Snackbar";
import CustomMaterialTable from "../../Components/CustomMaterialTable";

const Homepage = () => {
  const tableData = useSelector(({ users }) => users.userData);
  const [open, setOpen] = React.useState(false);
  const [mockData, setMockData] = useState([]);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setMockData(tableData);
  }, [tableData]);

  useEffect(() => {
    dispatch(setUserData(mockData));
  }, [mockData]);

  const handleChange = (event, index) => {
    const mockDataCpy = { ...mockData };
    mockDataCpy[index]["gender"] = event;
    setMessage(`Gender updated successfully`);
    setOpen(true);
    setMockData(mockDataCpy);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const columns = [
    {
      field: "name",
      title: "Parents & Siblings",
      render: (rowData) => (
        <div style={{ display: "flex" }}>
          <img
            src={rowData.url}
            style={{ width: "56px", height: "51px", borderRadius: "10%" }}
          />
          <p>{rowData.name}</p>
        </div>
      ),
    },
    {
      title: "Gender",
      field: "gender",
      editable: "never",
      type: "string",
      render: (data) => {
        const { tableData, gender } = data;
        return (
          <CustomSelect
            options={genderOptions}
            value={gender}
            label="Gender"
            handleChange={(e) => handleChange(e.target.value, tableData.id)}
          />
        );
      },
    },
    { title: "Birth", field: "birthYear", type: "string" },
    {
      title: "Birth Location",
      field: "birthLocation",
      type: "string",
      cellStyle: {
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "160px",
        height: "1.2em",
        whiteSpace: "nowrap",
      },
      render: ({ birthLocation }) => {
        return (
          <div>
            <Tooltip title={birthLocation} placement="right">
              <p>{birthLocation}</p>
            </Tooltip>
          </div>
        );
      },
    },
    {
      title: "Death",
      field: "death",
      type: "string",
      cellStyle: {
        maxWidth: "150px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
    {
      title: "Death Location",
      field: "deathLocation",
      type: "string",
      cellStyle: {
        maxWidth: "150px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      render: ({ deathLocation }) => {
        return (
          <div>
            <Tooltip title={deathLocation} placement="right">
              <p>{deathLocation}</p>
            </Tooltip>
          </div>
        );
      },
    },
    { title: "Marriage", field: "marriage", type: "string" },
    { title: "Spouse", field: "spouse", type: "string" },
  ];
  const options = {
    search: false,
    sorting: false,
    paging: false,
  };

  const cellEditable = {
    onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
      return new Promise((resolve, reject) => {
        const { field, title } = columnDef;
        const { tableData } = rowData;
        const mockDataCpy = { ...mockData };
        mockDataCpy[tableData.id][field] = newValue;
        console.log(mockDataCpy);
        setMockData(mockDataCpy);
        setMessage(`${title} updated successfully`);
        setOpen(true);
        setTimeout(resolve, 1000);
      });
    },
  };
  return (
    <div className="mui-table">
      <CustomMaterialTable
        options={options}
        columns={columns}
        mockData={mockData}
        cellEditable={cellEditable}
      />
      <CustomSnackbar
        handleClose={handleClose}
        open={open}
        severity={"success"}
        message={message}
      />
    </div>
  );
};

export default Homepage;

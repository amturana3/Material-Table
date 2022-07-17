import React from "react";
import MaterialTable from "material-table";

const CustomMaterialTable = ({ options, columns, mockData, cellEditable }) => {
  console.log(mockData);
  return (
    <MaterialTable
      title={false}
      options={options}
      columns={columns}
      data={mockData}
      cellEditable={cellEditable}
    />
  );
};

export default CustomMaterialTable;

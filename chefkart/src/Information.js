import React from "react";
import DataTable from "react-data-table-component";
import datum from "./data.json";

const Information = () => {
  const [data, setData] = React.useState(datum);
  const columns = [
    {
      name: "FIRST NAME",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "LAST NAME",
      selector: (row) => row.last_name,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
    },
    {
      name: "GENDER",
      selector: (row) => row.gender,
    },
    {
      name: "STATUS",
      selector: (row) => row.status.toString(),
    },
  ];

  const conditionalRowStyles = [
    //row is green when status is true
    {
      when: (row) => row.status === true,
      style: {
        backgroundColor: "green",
      },
    },

    //row is red when status is false
    {
      when: (row) => row.status === false,
      style: {
        backgroundColor: "red",
      },
    },

    // when row is clicked, the backround color changes
    {
      when: (row) => row.toggleSelected,
      style: {
        backgroundColor: "transparent",
        userSelect: "none",
      },
    },
  ];

  const handleRowClicked = (row) => {
    const updatedData = data.map((item) => {
      if (row.id !== item.id) {
        return item;
      }

      return {
        ...item,
        toggleSelected: !item.toggleSelected,
      };
    });

    setData(updatedData);
  };

  return (
    <DataTable
      style={{ backgroundColor: "#e7bbe3" }}
      columns={columns}
      data={data}
      pagination
      defaultSortFieldId={1}
      conditionalRowStyles={conditionalRowStyles}
      onRowClicked={handleRowClicked}
    />
  );
};

export default Information;

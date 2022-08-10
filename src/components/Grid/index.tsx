import React, { useMemo, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { athletes } from "./athletes";

const Grid = (gridProps: any) => {
  const containerStyle = React.useMemo(
    () => ({ width: "100%", height: "100%" }),
    []
  );
  //   const gridStyle = React.useMemo(
  //     () => ({ height: "100%", width: "100%" }),
  //     []
  //   );
  //   const [rowData, setRowData] = useState();
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      resizable: true,
      filter: true,
    };
  }, []);
  const [columnDefs] = useState([
    {
      headerName: "Sports Results",
      children: [
        { field: "sport", width: 140 },
        { field: "some col", width: 140 },
        {
          columnGroupShow: "open",
          field: "total",
          width: 100,
          filter: "agNumberColumnFilter",
        },
        {
          columnGroupShow: "open",
          field: "gold",
          width: 100,
          filter: "agNumberColumnFilter",
        },
        {
          columnGroupShow: "open",
          field: "silver",
          width: 100,
          filter: "agNumberColumnFilter",
        },
        {
          columnGroupShow: "open",
          field: "bronze",
          width: 100,
          filter: "agNumberColumnFilter",
        },
        {
          columnGroupShow: "open",
          field: "lost",
          width: 100,
          filter: "agNumberColumnFilter",
        },
        {
          columnGroupShow: "open",
          field: "col1",
          width: 100,
          filter: "agNumberColumnFilter",
        },
        {
          columnGroupShow: "open",
          field: "col2",
          width: 100,
          filter: "agNumberColumnFilter",
        },
      ],
    },
    {
      headerName: "Calendar",
      children: [
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "January",
        },
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "February",
        },
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "March",
        },
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "April",
        },
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "May",
        },
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "June",
        },
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "July",
        },
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "Aug",
        },
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "Sept",
        },
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "Oct",
        },
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "Nov",
        },
        {
          field: "age",
          width: 90,
          filter: "agTextColumnFilter",
          headerName: "Dec",
        },
        // {
        //   field: "age",
        //   width: 90,
        //   filter: "agNumberColumnFilter",
        // },
        // { headerName: "Country", field: "country", width: 140 },
      ],
    },
  ]);

  return (
    <div style={containerStyle}>
      <p>THis is the component</p>
      <div style={{ width: "100%", height: 500 }} className="ag-theme-alpine">
        <AgGridReact
          rowData={athletes}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          //   onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default Grid;

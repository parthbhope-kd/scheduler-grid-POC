import React, { useMemo, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { athletes, data } from "./athletes";
import Cell from "./Cell";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Grid = (gridProps: any) => {
  const [showYearView, setShowYearView] = useState<boolean>(true);
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
        { field: "athlete", width: 160, headerName: "Developer" },

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

      children: showYearView
        ? [
            {
              field: "jan",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "Jan",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "feb",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "Feb",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "mar",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "Mar",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "apr",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "Apr",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "may",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "May",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "jun",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "Jun",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "jul",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "Jul",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "aug",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "Aug",
              cellStyle: {
                color: "white",
                "background-color": "green",
                paddingTop: "24",
              },
            },
            {
              field: "sep",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "Sep",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "oct",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "Oct",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "nov",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "Nov",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "dec",
              width: 80,
              filter: "agTextColumnFilter",
              headerName: "Dec",
              cellStyle: (params: any) => {
                if (params.data.dec === 0) {
                  console.log(params);

                  return { color: "white", backgroundColor: "red" };
                }
                return { color: "white", backgroundColor: "blue" };
              },
            },

            // {
            //   field: "age",
            //   width: 90,
            //   filter: "agNumberColumnFilter",
            // },
            // { headerName: "Country", field: "country", width: 140 },
          ]
        : [
            {
              field: "nov",
              width: 160,
              filter: "agTextColumnFilter",
              headerName: "Jan 1 to Jan 7",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "nov",
              width: 160,
              filter: "agTextColumnFilter",
              headerName: "Jan 8 to Jan 15",
              cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "nov",
              width: 160,
              filter: "agTextColumnFilter",
              headerName: "Jan 16 to Jan 22",
              cellRenderer: () => {
                return <Cell></Cell>;
              },
              cellStyle: { padding: 0, color: "white" },

              // cellStyle: { color: "white", "background-color": "green" },
            },
            {
              field: "nov",
              width: 160,
              filter: "agTextColumnFilter",
              headerName: "Jan 23 to Jan 31",
              cellRenderer: () => {
                return <Cell></Cell>;
              },
              cellStyle: { padding: 0, color: "white" },
              // cellStyle: { color: "white", "background-color": "green","margin-top":8,"margin-bottom":8 },
            },
          ],
    },
  ]);
  const col2:any[] = [{ field: "country", rowGroup: true },
  { field: "sport", rowGroup: false },];
  const row2:any[]= [
    { 'country': 'United States', 'sport': 'Biking' },
    { 'country': 'United States', 'sport': 'Swimming', },
    { 'country': 'United States', 'sport': 'Swimming' },
    { 'country': 'Turkey',        'sport': 'Swimming', },
    { 'country': 'Turkey',        'sport': 'Swimming' },
    { 'country': 'Brasil',        'sport': 'Football' },
  ]
;
  return (
    <div style={containerStyle}>
      <p>This is the component</p>
      
      <div
        style={{ width: "90%", height: 330, marginLeft: 36 }}
        className="ag-theme-alpine"
      >
        <AgGridReact 
      columnDefs={col2}
      rowData={row2} 
      ></AgGridReact>
        {/* <Cell></Cell> */}
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          //   onGridReady={onGridReady}
          sideBar={"columns"}
        ></AgGridReact>
      </div>
      <br />
      <br />
      <br />

      <div
        style={{ width: "90%", height: 350, marginLeft: 36 }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          //   onGridReady={onGridReady}
          sideBar={"columns"}
        ></AgGridReact>
      </div>
      {/* <Accordion children={["tab 1", "tab2"]}></Accordion> */}
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          //   onGridReady={onGridReady}
          sideBar={"columns"}
        ></AgGridReact>
            {/* <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography> */}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>

          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
};

export default Grid;

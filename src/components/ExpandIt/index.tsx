import { columnSelected } from "@syncfusion/ej2-react-grids";
import { AgGridReact } from "ag-grid-react";
import React from "react";
// import Expander from "./expander";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


const ExpandIt = () => {
    const Expander = (props:any) => {
        const [collapse, setCollapse] = React.useState<boolean>(true);
        const expandAndCollapseHandler = ()=>{
            settableRows(collapse?rows:rowsExpanded)
            setCollapse(!collapse)
            
        }
        
        
        return(
            <span>
                <button onClick={expandAndCollapseHandler}>{collapse?"+":"-"}</button>
                {/* <button>"THis is </button> */}
                {   props.value}
            </span>
        )
      
    }
  const [rows, setrows] = React.useState<any[]>([
    { name: "Parth", jan: "100", feb: "100",},
    { name: "Aditya", jan: "50", feb: "100" },
  ]);
  const [tableRows, settableRows] = React.useState<any[]>(rows)
  const [columns, setcolumns] = React.useState<any[]>([
    { headerName: "Dev", field: "name",cellRenderer:Expander },
    { headerName: "Jan", field: "jan" },
    { headerName: "Jan", field: "feb" },
  ]);
const [rowsExpanded, setrowsExpanded] = React.useState<any[]>([
    { name: "Parth", jan: "100", feb: "100" },
    { name: "Aditya", jan: "50", feb: "100" },
    { name: "Gowrish", jan: "100", feb: "100" },
    { name: "Vivek", jan: "50", feb: "100" },
])
  return <div style={{height:"300px",width:"100%"}}>
    <AgGridReact  columnDefs={columns} rowData={tableRows} className="ag-theme-alpine" components={{Expander:Expander}}>

    </AgGridReact>
  </div>;
};
export default ExpandIt;

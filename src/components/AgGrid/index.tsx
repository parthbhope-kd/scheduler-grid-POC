import { GridOptionsWrapper } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import React from "react";
interface IAgGridProps {
  rows: any[];
  columns: [];
}
const myRenderer = (params: any) => {
  return (
    <span className="my-renderer">
      <button onClick={()=>{}}>button </button>
      {/* <img
        src="https://d1yk6z6emsz7qy.cloudfront.net/static/images/loading.gif"
        alt="imag"
        className="my-spinner"
      /> */}
      {params.value}
    </span>
  );
};
const AgGrid = () => {
    const columns:any[]=[
        {field:'name',headerName:"Names",rowGroup:false},
        {field:'jan',headerName:"allocatoin",cellRenderer:myRenderer},
]
    const rows:any[] = [
      {name:"Parth",jan:100},
      {name:"Parth",jan:100},
  ]
  return <div style={{width:"100%",height:'500px'}}>
    <AgGridReact
    columnDefs={columns}
    rowData={rows}
    components={{myRenderer:myRenderer}}
    
    ></AgGridReact>
  </div>;
};

export default AgGrid;

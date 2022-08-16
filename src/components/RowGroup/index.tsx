import React from 'react'
import  { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { data } from '../Grid/athletes';

const RowGroup = () => {
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'country', rowGroup: true, hide: true },
    { field: 'year', rowGroup: true, hide: true },
    { field: 'athlete' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true,
    };
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
    };
  }, []);

//   const onGridReady = useCallback((params) => {
//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//       .then((resp) => resp.json())
//       .then((data) => setRowData(data));
//   }, []);
  return (
    <div style={{marginTop:100}}> 
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        otsklfjsdklfj sdlkjs
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          animateRows={true}
        //   onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
    </div>
  )
}

export default RowGroup
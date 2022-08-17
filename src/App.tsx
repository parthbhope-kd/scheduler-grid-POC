import "./App.css";
import AgGrid from "./components/AgGrid";
import ExpandIt from "./components/ExpandIt";
import Expander from "./components/ExpandIt/expander";
import Grid from "./components/Grid";
import NestedGrid from "./components/NestedGrid";
import RowGroup from "./components/RowGroup";
import SyncFusion from "./components/SyncFusion";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
        </header> */}
      <ExpandIt></ExpandIt>
      <AgGrid></AgGrid>
      <Grid></Grid>
      {/* <NestedGrid></NestedGrid> */}
      {/* <RowGroup></RowGroup> */}
      {/* <SyncFusion></SyncFusion> */}
    </div>
  );
}

export default App;

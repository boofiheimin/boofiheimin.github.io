import "./App.css";

import MainCard from "./components/MainCard";
import { Paper, Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid container direction="column" justify="center" alignItems="center">
        <Paper elevation={3}>
          <MainCard />
        </Paper>
      </Grid>
    </div>
  );
}

export default App;

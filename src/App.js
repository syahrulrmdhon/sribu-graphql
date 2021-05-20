import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./containers/HomePage";
import DetailActor from "./containers/DetailActor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/detail-actor/:idActor"} exact component={DetailActor} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;

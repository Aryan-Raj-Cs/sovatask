// import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import DetailsMovies from "./components/DetailsMovies";
import Auto from "./components/AutoSuggest";

function Appcontainer() {
  return (
    <>
      <Router>
        <Auto />
        <Switch>
          <Route exact path="/movies" component={Movies}></Route>
          <Route
            exact
            path="/moviedetails/:movieId"
            component={DetailsMovies}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default Appcontainer;

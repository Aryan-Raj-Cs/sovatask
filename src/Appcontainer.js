import Search from "./components/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import DetailsMovies from "./components/DetailsMovies";

function Appcontainer() {
  return (
    <>
      <Router>
        <Search />
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

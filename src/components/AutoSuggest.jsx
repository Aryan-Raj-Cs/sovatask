import "../css/auto.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { debounce } from "lodash";
import "../css/search.css";
function AutoSuggest() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [auto, setAuto] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    setAuto(true);
    history.replace("/");
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=a0fa3b48`)
      .then((data) => data.json())
      .then((result) => {
        if (result.Response === "False") {
          console.log("Result Not Found");
          setData([]);
        } else {
          console.log("result", result.Search);
          setData([...result.Search]);
          dispatch({ type: "ALLMOVIES", value: result.Search });
        }
      });
  }, [search, dispatch, history]);
  const db = debounce((e) => {
    setSearch(e.target.value);
  }, 500);

  const submit = (e) => {
    console.log("submit");
    setAuto(false);
    if (data.length > 0) {
      history.push("/movies");
    }
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="wrapper">
          <div className="search-input">
            {/* <a href="" target="_blank" hidden></a> */}
            <input type="text" placeholder="Find Movies.." onChange={db} />
            <div className="autocom-box">
              {auto &&
                data.map((value) => {
                  return (
                    <>
                      <div
                        className="list"
                        onClick={() => {
                          setAuto(false);
                          history.push("/moviedetails/" + value.imdbID);
                        }}
                      >
                        {value.Title}
                      </div>
                    </>
                  );
                })}
            </div>
            <div className="icon">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AutoSuggest;

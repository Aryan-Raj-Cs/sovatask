import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/card.css";
import img from "../image/loading.gif";
function DetailsMovies() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    dispatch({ type: "LOADSTART" });
    fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=a0fa3b48`)
      .then((result) => result.json())
      .then((data) => {
        setDetails(data);
        dispatch({ type: "LOADEND" });
      });
  }, [movieId, dispatch]);
  console.log("movies", state);
  return (
    <>
      {state.loading ? (
        <>
          <div className="card-img">
            <img src={img} alt="img not found" />
          </div>
        </>
      ) : (
        <div className="card-details">
          <div className="card card-style">
            <img
              src={details.Poster}
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              alt=""
            />
          </div>
          <div className="card details font">
            <strong>
              {details.Title} {"(" + details.Year + ")"}
            </strong>
            <br></br>
            <br></br>
            imdbRating:{details.imdbRating}
            <br></br>
            Genre:{details.Genre}
            <br></br>
            Runtime:{details.Runtime}
            <br></br>
            Director:{details.Director}
            <br></br>
            Country:{details.Country}
            <br></br>
            <br></br>
            {details.Plot}
            <br></br>
          </div>
        </div>
      )}
    </>
  );
}
export default DetailsMovies;

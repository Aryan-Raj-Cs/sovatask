import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/card.css";

function Movies() {
  const state = useSelector((state) => state);
  console.log("movies", state);
  return (
    <>
      <div className="card-parent">
        {state.allMovies.map((value) => {
          return (
            <Link
              to={"moviedetails/" + value.imdbID}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="card card-style" key={value.id}>
                <img
                  src={value.Poster}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                  alt=""
                />
                <span className="name">
                  {value.Title.substring(0, 10) + " (" + value.Year + ")"}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default Movies;

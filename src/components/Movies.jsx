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
            <div className="card card-style" key={value.id}>
              <Link
                to={"moviedetails/" + value.imdbID}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={value.Poster}
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "5px",
                  }}
                  alt=""
                />
              </Link>
              <span className="name">
                {value.Title.substring(0, 10) + " (" + value.Year + ")"}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Movies;

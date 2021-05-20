import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_MOVIES } from "../Queries";

const HomePage = () => {
  const getAllMovies = useQuery(GET_MOVIES);
  return (
    <div className="container">
      <h1>List of Movies</h1>
      {getAllMovies.loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="row" style={{ justifyContent: "center" }}>
        {getAllMovies.data &&
          getAllMovies.data.movies &&
          getAllMovies.data.movies.length > 0 &&
          getAllMovies.data.movies.map((item) => (
            <div key={item.id} className="card col-md-4 custom-card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.id}</h6>
                <p className="card-text">{item.genre}</p>
                <Link to={`/detail-actor/${item.actor.id}`}>{item.actor.name}</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;

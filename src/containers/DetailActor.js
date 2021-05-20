import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_ACTOR } from "../Queries";

const DetailActor = ({ match }) => {
  const { params } = match;
  const getActor = useQuery(GET_ACTOR(params.idActor));
  return (
    <React.Fragment>
      <h1>DetailActor</h1>
      {getActor.loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="container" style={{ justifyContent: "center"}}>
        {getActor.data &&
          getActor.data.actor && (
            <div className="custom-card card-detail">
              <div className="card-body">
                <h5 className="card-title">{getActor.data.actor.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {getActor.data.actor.id}
                </h6>
                <h6>Movies</h6>
                {getActor.data.actor.movies &&
                  getActor.data.actor.movies.length > 0 &&
                  getActor.data.actor.movies.map((item) => (
                    <p className="card-text">{item.name}</p>
                  ))}
              </div>
            </div>
          )}
          <Link to={"/"} className="btn btn-danger">Back to Home</Link>
      </div>
    </React.Fragment>
  );
};

export default DetailActor;

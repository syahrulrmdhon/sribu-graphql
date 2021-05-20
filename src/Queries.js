import { gql } from "apollo-boost";

export const GET_MOVIES = gql`
  {
    movies {
      id
      name
      genre
      actor {
        id
        name
      }
    }
  }
`;

export const GET_ACTOR = (id) => gql`
  {
    actor(id: "${id}") {
      id
      name
      age
      movies {
        id
        name
      }
    }
  }
`;

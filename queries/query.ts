import { gql } from "@apollo/client";

const getAllCharacters = gql`
  query {
    characters(page: 2) {
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`;

const getAllCharactersByName = gql`
  query getAllCharactersByName($filter: FilterCharacter) {
    characters(filter: $filter) {
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`;

const getCharacter = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
      }
      location {
        id
        name
        type
        dimension
      }
      image
      episode {
        id
        name
        episode
        air_date
      }
      created
    }
  }
`;

export { getAllCharacters, getAllCharactersByName, getCharacter };

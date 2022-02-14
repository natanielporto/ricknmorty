import { gql } from "@apollo/client";

export interface CharactersQueryProps extends Document {
  page: number,
  perPage: number,
}

export const GET_ALL_CHARACTERS = gql`
  query ($page: Int!) {
    characters(page: $page) {
      results { 
        id,
        name,
        status,
        image,
        location {
          name,
        }
      }
    }
  }
`;

export const GET_ALL_LOCATIONS_AND_RESIDENTS = gql`
query {
  locations {
    results {
      id,
      name,
      residents {
        id,
        name,
        status,
      }
    }
  }
}
`
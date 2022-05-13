import { request, gql } from "graphql-request";
import { GetDataQuery, GetDataQueryVariables } from "../generated/graphql";
const query = gql`
  query GetData {
    Page {
      media {
        siteUrl
        title {
          english
          native
        }
        format
      }
    }
  }
`;
const getData = (variables?: GetDataQueryVariables): Promise<GetDataQuery> =>
  request("https://graphql.anilist.co", query);
export default getData;

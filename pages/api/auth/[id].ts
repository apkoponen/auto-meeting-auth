import gql from "graphql-tag";
import { Auth, getAwsClient } from "../../../src/api/aws";
import { route } from "../../../src/api/helpers";

const query = gql(`
query getAuth($id: ID!) {
  getAuth(id: $id) {
    id
    code
  }
}
`);

const mutation = gql(`
mutation updateAuth($input: UpdateAuthInput!) {
  updateAuth(input: $input) {
    id
    code
  }
}
`);

export default route()
  .get((req, res) => {
    res.status(200).send("You sent a GET request!");
  })
  .post((req, res) => {
    res.status(200).send("You sent a POST request!");
  });

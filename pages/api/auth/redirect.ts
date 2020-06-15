import { Auth, getAwsClient } from "../../../src/api/aws";
import gql from "graphql-tag";
import { route } from "../../../src/api/helpers";

const mutation = gql(`
mutation updateAuth($input: UpdateAuthInput!) {
  updateAuth(input: $input) {
    id,
    code
  }
}
`);

export default route().get(async (req, res) => {
  const { state, code } = req.query;

  if (!state || !code) {
    res.status(400).end();
  }

  const client = getAwsClient();
  await client.hydrated();
  await client.mutate<{ updateAuth: Auth }>({
    mutation,
    variables: {
      input: {
        id: state,
        code,
      },
    },
  });

  res.writeHead(302, {
    Location: "/success",
  });
  res.end();
});

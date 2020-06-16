import { Auth, getAwsClient } from "../../../src/api/aws";
import gql from "graphql-tag";
import { route } from "../../../src/api/helpers";

const mutation = gql(`
mutation createAuth($input: CreateAuthInput!) {
  createAuth(input: $input) {
    id,
    code
  }
}
`);

export default route().post(async (req, res) => {
  const client = getAwsClient();
  await client.hydrated();
  const { data } = await client.mutate<{ createAuth: Auth }>({
    mutation,
    variables: {
      input: {},
    },
  });
  const { id } = data.createAuth;
  res.status(200).json({ id });
});

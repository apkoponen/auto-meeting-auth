import gql from "graphql-tag";
import { Auth, getAwsClient } from "../../../src/api/aws";
import { route } from "../../../src/api/helpers";
import qs from "qs";
import Axios from "axios";

const query = gql(`
query getAuth($id: ID!) {
  getAuth(id: $id) {
    id
    code
  }
}
`);

export default route().get(async (req, res) => {
  const { id } = req.query;

  if (!id) {
    res.status(400).end();
  }

  const client = getAwsClient();
  await client.hydrated();
  const { data } = await client.query<{ getAuth: Auth }>({
    query,
    variables: {
      id,
    },
  });

  if (data.getAuth.code) {
    const response = await Axios.post(
      "https://oauth2.googleapis.com/token",
      qs.stringify({
        code: data.getAuth.code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_ID,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type: "authorization_code",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    res.status(200).json(response.data);
  } else {
    return res.status(204).end();
  }
});

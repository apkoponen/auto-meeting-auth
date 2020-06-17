import { route } from "../../../src/api/helpers";
import qs from "qs";

export default route().post(async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res.status(400).end();
  }

  const result = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: qs.stringify({
      refresh_token: refreshToken,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_ID,
      redirect_uri: "",
      grant_type: "authorization_code",
    }),
  });

  res.status(200).json(result);
});

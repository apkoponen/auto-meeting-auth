import { route } from "../../../src/api/helpers";
import qs from "qs";
import Axios from "axios";

export default route().post(async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res.status(400).end();
  }

  const result = await Axios.post(
    "https://oauth2.googleapis.com/token",
    qs.stringify({
      refresh_token: refreshToken,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      grant_type: "refresh_token",
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  res.status(200).json(result.data);
});

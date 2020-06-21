import { route } from "../../../src/api/helpers";
import qs from "qs";

export default route().get(async (req, res) => {
  const { state } = req.query;

  if (!state) {
    res.status(400).end();
  }

  res.writeHead(302, {
    Location:
      "https://accounts.google.com/o/oauth2/v2/auth?" +
      qs.stringify({
        scope:
          "https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.readonly",
        access_type: "offline",
        include_granted_scopes: "true",
        response_type: "code",
        prompt: "consent",
        state,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        client_id: process.env.GOOGLE_CLIENT_ID,
      }),
  });
  res.end();
});

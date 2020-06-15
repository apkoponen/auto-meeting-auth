Object.defineProperty(exports, "__esModule", { value: true });
const config = {
  API_KEY: process.env.AWS_APPSYNC_API_KEY || "",
  HOST: process.env.AWS_APPSYNC_HOST || "",
  REGION: "eu-central-1",
  PATH: "/graphql",
  ENDPOINT: "",
};
config.ENDPOINT = "https://" + config.HOST + config.PATH;
exports.default = config;

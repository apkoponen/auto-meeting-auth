import aws_exports from "../../aws-exports";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import AWSAppSyncClient from "aws-appsync/lib";

export function getAwsClient() {
  const url = aws_exports.ENDPOINT;
  const region = aws_exports.REGION;
  const type = AUTH_TYPE.API_KEY;
  const apiKey = aws_exports.API_KEY;

  return new AWSAppSyncClient({
    url,
    region,
    auth: {
      type,
      apiKey,
    },
    disableOffline: true,
  });
}

export interface Auth {
  id: string;
  code: string;
}

import { NextApiRequest, NextApiResponse } from "next";

const httpMethods = ["DELETE", "GET", "PATCH", "POST", "PUT"] as const;
type HttpMethod = typeof httpMethods[number];
type MethodCallback<T = any> = (
  req: NextApiRequest,
  res: NextApiResponse<T>
) => void;
type MethodCallbacks<T = any> = Record<string, MethodCallback<T>>;
interface Router {
  (): MethodCallback;
  delete: <T = any>(methodCallback: MethodCallback<T>) => Router;
  get: <T = any>(methodCallback: MethodCallback<T>) => Router;
  patch: <T = any>(methodCallback: MethodCallback<T>) => Router;
  post: <T = any>(methodCallback: MethodCallback<T>) => Router;
  put: <T = any>(methodCallback: MethodCallback<T>) => Router;
}

function createRegisterMethodFunction<T>(
  handler: Router,
  methodCallbacks: MethodCallbacks<T>,
  method: HttpMethod
): (methodCallback: MethodCallback<T>) => Router {
  return (methodCallback: MethodCallback<T>) => {
    methodCallbacks[method] = methodCallback;
    return handler;
  };
}

export function route(): Router {
  const methodCallbacks: MethodCallbacks = {};
  const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method && methodCallbacks[req.method]) {
      return methodCallbacks[req.method](req, res);
    }
    res.setHeader("Allow", Object.keys(methodCallbacks));
    res.status(405).end({ error: `Method ${req.method} Not Allowed` });
  };
  const methods = {
    delete: createRegisterMethodFunction(
      handler as Router,
      methodCallbacks,
      "DELETE"
    ),
    get: createRegisterMethodFunction(
      handler as Router,
      methodCallbacks,
      "GET"
    ),
    patch: createRegisterMethodFunction(
      handler as Router,
      methodCallbacks,
      "PATCH"
    ),
    post: createRegisterMethodFunction(
      handler as Router,
      methodCallbacks,
      "POST"
    ),
    put: createRegisterMethodFunction(
      handler as Router,
      methodCallbacks,
      "PUT"
    ),
  };
  return Object.assign(handler, methods) as Router;
}

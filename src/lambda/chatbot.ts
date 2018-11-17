type CallbackFunc = (a: null, resp: IResponse) => void;
type HandlerFunc = (evt: IHanderEvent, ctx: any, callback: CallbackFunc) => void;

interface IResponse {
  statusCode: number;
  body: string;
}
interface IHeader {
  [headerName: string]: string;
}
interface IQueryString {
  [paramName: string]: string;
}
interface IHanderEvent {
  path: string;
  httpMethod: string;
  headers: IHeader,
  queryStringParameters: IQueryString,
  body: string;
  isBase64Encoded: boolean;
}
export const handler: HandlerFunc = (evt, ctx, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      title: "My first netlify deployment",
      message: 'Hello, Netlify!'
    })
  })
};

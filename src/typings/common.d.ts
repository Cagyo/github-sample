declare type HttpRequestMethodType = 'POST' | 'GET' | 'DELETE' | 'PATCH';

declare interface IServerResponse {
  ok: boolean;
  json: any;
  headers: any;
}

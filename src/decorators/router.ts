
export enum HttpMethod {
  HEAD,
  OPTIONS,
  GET,
  PUT,
  PATCH,
  POST,
  DELETE,
  ALL,
}

export function route(path: string) {
  return function(target: any, key: any, descriptor: any) {
    const func = descriptor.value;
    
  }
}
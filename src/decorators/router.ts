

import * as Router from "koa-router"
export const router = new Router();

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

export function Route(path: string, method: HttpMethod) {
  return function(target: any, key: any, descriptor: any) {
    const func = descriptor.value;

    descriptor.value = (...args: any[]) => {
      router.get(path, (ctx, next) => {
        ctx.body = func.call(args)
      });
    }
  }
}

export function GetMapping(path: string) {
  Route(path, HttpMethod.GET)
}
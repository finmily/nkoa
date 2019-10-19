

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
      router[HttpMethod[method].toLowerCase()](path, (ctx, next) => {
        ctx.body = func.call(args)
      })
    }
  }
}

export function GetMapping(path: string) {
  return Route(path, HttpMethod.GET)
}

export function PostMapping(path: string) {
  return Route(path, HttpMethod.POST)
}

export function PatchMapping(path: string) {
  return Route(path, HttpMethod.PATCH)
}

export function DeleteMapping(path: string) {
  return Route(path, HttpMethod.DELETE)
}

export function PutMapping(path: string) {
  return Router(path, HttpMethod.PUT)
}
import { Context } from "koa";


function route(path: string): MethodDecorator {
  return function(target: any, key: any, descriptor: any) {
    const func = descriptor.value;
    descriptor.value = (...args: any[]) => {
      try {
        const result = func.apply(target, args)
        console.log(`greet successfully!`)
      } catch (err) {
          console.log(`greet error : ${err}`)
      }
    }
  }
}

export class helloController {
  @route("/test")
  hello(): String {
    return "hello world"
  }
}
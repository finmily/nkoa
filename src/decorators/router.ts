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
    console.log("descriptor", func)
    descriptor.value = (...args: any[]) => {
      try {
        func.apply(target, args)
        console.log(`greet successfully!`)
    } catch (err) {
        console.log(`greet error : ${err}`)
    }
    }
  }
}
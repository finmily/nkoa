import { Route, HttpMethod } from "../decorators/router"

export class helloController {
  @Route("/test", HttpMethod.GET)
  hello(): String {
    return "hello world"
  }
}
import {Route, HttpMethod, GetMapping} from "../decorators/router"

export class helloController {
  @GetMapping("/test")
  hello(): String {
    return "hello world"
  }
}
import * as Koa from "koa"
import * as Router from "koa-router"
import { helloController } from "./controller/helloWorld"
const app = new Koa();
const router = new Router();
const controller = new helloController();
controller.hello()

router.all('/hello', (ctx, next) => {
  controller.hello()
  ctx.body = "hello"
})
app.use(router.routes())
app.listen(3001);

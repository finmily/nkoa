import * as Koa from "koa"
import { helloController } from "./controller/helloWorld"
import { router } from "./decorators/router"
const app = new Koa();
const controller = new helloController();
controller.hello()
router.all('/hello', (ctx, next) => {
  ctx.body = "hello"
})
app.use(router.routes())
app.listen(3001);

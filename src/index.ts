import * as Koa from "koa"
import * as Router from "koa-router"

const router2 = new Router();
import {helloController} from "./controller/helloWorld"
import {router} from "./decorators/router"

const app = new Koa();
const controller = new helloController();
controller.hello();
router2.all('/hello', (ctx, next) => {
    ctx.body = "hello"
});
app.use(router2.routes());
app.use(router.routes());
app.listen(3001);

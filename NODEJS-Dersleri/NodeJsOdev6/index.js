const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = "Index Sayfasına Hoşgeldiniz"
});

router.get('/hakkimda', (ctx, next) => {
    ctx.body = "Hakkımızda Sayfasına Hoşgeldiniz"
});

router.get('/iletisim', (ctx, next) => {
    ctx.body = "İletişim Sayfasına Hoşgeldiniz"
});

app.use(router.routes());

const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu port ${port} de baslatıldı.`);
});
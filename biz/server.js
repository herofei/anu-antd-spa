const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');
const app = new Koa();
const argv = require('yargs').argv;
const column = '../dist';
app.listen(8082);

app.use(koaStatic(path.resolve(__dirname, column)));

var serve = require('koa-static');
var koa = require('koa');
var app = koa();

// $ GET /package.json
app.use(serve('public/'));

app.listen(3000);

console.log('listening on port 3000');
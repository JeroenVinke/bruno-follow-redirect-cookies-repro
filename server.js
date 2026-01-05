const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

// Define the endpoint
router.get('/', (ctx) => {
  ctx.cookies.set('exampleCookie', 'exampleValue', {
    httpOnly: false,
    secure: false
  });
  ctx.status = 302;
  ctx.redirect('https://localhost:3000/other-page');
});

// Define the POST endpoint to check for the exampleCookie
router.post('/check-cookie', (ctx) => {
  const cookie = ctx.cookies.get('exampleCookie');
  if (cookie) {
    ctx.body = { message: 'Cookie is present', value: cookie };
  } else {
    ctx.body = { message: 'Cookie is not present' };
  }
});

// Use the router middleware
app.use(router.routes()).use(router.allowedMethods());

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const enforce = require('express-sslify');
const compression = require('compression');
const myApp = express();
const port = 4200;

if (process.env.SSLREDIRECT && process.env.SSLREDIRECT !== 'false') {
  myApp.use(enforce.HTTPS({ trustProtoHeader: true }));
  console.log('ssl redirect enabled.');
}
myApp.use(compression());
myApp.use(
  express.static('./build', {
    etag: true,
    lastModified: true,
    maxAge: '1m',
  }),
);
myApp.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'build' });
});

myApp.listen(process.env.PORT || port);
console.log(
  `Running webapp in ${process.env.NODE_ENV}, PORT ${process.env.PORT || port}`,
);

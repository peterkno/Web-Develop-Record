
const express = require('express');
const cors = require('cors');


const personRouter = require('./routers/persons.js');
const testamentRouter = require('./routers/testaments.js');
const mailRouter = require('./routers/mails.js');
const requestLogger = require('./middleware/request-logger.js');
const errorHandler = require('./middleware/error-handler.js');



const app = express();

app.use(cors());
app.use(requestLogger);
app.use(express.static('dist'));
app.use('/api', personRouter);
app.use('/api', testamentRouter);
app.use('/api', mailRouter);
app.get('/*', (req, res) => res.redirect('/'));

app.use(errorHandler);

const port = 9487;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`);
});

// const http = require('http');
// const https = require('https');
// const express = require('express');
// const multer = require('multer');
// const fs = require('fs');
// const uuid = require('uuid/v4');
// const moment = require('moment');
// const cors = require('cors');
// const fallback = require('express-history-api-fallback');
// const helmet = require('helmet');
// const expressStaticGzip = require("express-static-gzip");

// const postRouter = require('./routers/posts.js');
// const uploadRouter = require('./routers/upload.js');
// const requestLogger = require('./middleware/request-logger.js');
// const errorHandler = require('./middleware/error-handler.js');

// const privateKey  = fs.readFileSync('./ssl/private.key');
// const certificate = fs.readFileSync('./ssl/certificate.crt');
// const ca = fs.readFileSync('./ssl/ca_bundle.crt');
// const credentials = { key: privateKey, cert: certificate, ca: ca };

// const port = 9487;
// // const port = 80;

// const app = express();
// app.use(cors());
// app.use(helmet());
// app.use(helmet.noCache({Expires: '-1'}));
// app.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: 'master-only' }))
// app.use(helmet.noCache())
// app.use(helmet.referrerPolicy({ policy: 'same-origin' }))

// app.use(express.static('dist'));
// app.use(requestLogger);
// app.use(errorHandler);
// app.use("/", expressStaticGzip('dist'));
// app.use('/api', uploadRouter);
// app.use('/api', postRouter);
// app.use(fallback('index.html', { root: 'dist' }));

// // app.listen(port, () => {
// //     console.log(`Server is up and running on port ${port}...`);
// // });
// // app.listen(process.env.PORT || 5000);

// const app80 = express();
// app80.use(helmet());

// app80.get('/', (req, res) => {
//     res.status(301).redirect('https://www.nicenter.org.tw')
// })

// const httpServer = http.createServer(app);
// // const httpServer = http.createServer(app80);
// const httpsServer = https.createServer(credentials, app);

// httpServer.listen(port, () => {
// 	console.log(`HTTP Server running on port ${port}...`);
// });

// httpsServer.listen(443, () => {
// 	console.log('HTTPS Server running on port 443');
// });

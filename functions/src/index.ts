const functions = require("firebase-functions");
const express = require("express");
import routes from './routes/index';
import { connectDb } from "./db/index";
import bodyParser = require('body-parser');
import cors = require('cors');
import { allowCrossDomain } from "./middlewares/authentications";

const app = express();

app.get("/some-data", (request: any, response: any) => {
response.send("Hello world");
});
exports.app = functions.https.onRequest(app);
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(routes);


connectDb().then(async () => {
app.listen(3001, () => console.log("Listening on http://localhost:3001"));
});
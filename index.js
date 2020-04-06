const express = require("express");
const router = require("./routes");
const session = require("./middleware/session");
const corsMw = require("./middleware/cors");

const app = express();
app.use(express.json());
// if you run behind a proxy (e.g. nginx)
// app.set('trust proxy', 1);

// setup CORS logic
app.options("*", corsMw);
app.use(corsMw);

app.use(session);
app.use(router);
app.listen(8080, () => console.log("server is running on port 8080"));

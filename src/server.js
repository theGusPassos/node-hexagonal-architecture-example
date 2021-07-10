const express = require("express");
const http = require("http");

const startServer = () => {
  const app = express();
  const routes = require("./routes/index.route");
  app.use(routes);

  const httpServer = http.createServer(app);
  const port = 6123;
  httpServer.listen(port);
  console.log(`http server listening at port ${port}`);
};

module.exports = { startServer };

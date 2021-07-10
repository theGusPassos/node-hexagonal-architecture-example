const express = require("express");
const heroes = require("./hero.route");

const router = express.Router();

router.use("/heroes", heroes);

router.get("/", (_, res) =>
  res.send("Sample Node API with hexagonal architecture")
);

router.get("/health", (_, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;

console.log("connected");
const express = require("express");
const app = express();
const port = process.env.port || 3000;
//middleware
app.use(express.json());
app.use(express.urlencoded());

const server = app.listen(port, () => {
  console.log("listening in port", port);
});
app.get("/pid", (req, res) => {
  const pid = process.pid;
  console.log("pid", process.pid);
  res.json(pid);
});

const shutdown = () => {
  console.log("starting shutdown of express...");
  server.close(() => {
    console.log("Express shutdown.");
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

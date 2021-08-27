const static = require("node-static");

let file = new static.Server();

require("http")
  .createServer((req, res) => {
    req
      .addListener("end", () => {
        file.serve(req, res);
      })
      .resume();
  })
  .listen(process.env.PORT || 3000);

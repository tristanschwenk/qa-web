import liveServer from "live-server";

var params = {
  root: ".", // Set root directory that's being served. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  ignore: "scss,my/templates", // comma-separated string for paths to ignore
  file: "home.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  mount: [["/public", "./node_modules"]], // Mount a directory to a route.
  logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
  middleware: [
    function (req, res, next) {
      next();
    },
  ], // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);

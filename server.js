import express from "express";
import { createServer } from "http";
import path from "path";
import { Socket } from "socket.io";
import { toBuffer } from "qrcode";
import fetch from "node-fetch";

function connect(conn, PORT) {
  const app = (global.app = express());
  console.log(app);
  const server = (global.server = createServer(app));
  let _qr = "QR invalido, probablemente ya hayas escaneado el QR.";

  conn.ev.on("connection.update", function appQR({ qr }) {
    if (qr) _qr = qr;
  });

  app.use(async (req, res) => {
    res.setHeader("content-type", "image/png");
    res.end(await toBuffer(_qr));
  });

  server.listen(PORT, () => {
    console.log("App listened on port", PORT);
    if (opts["keepalive"]) keepAlive();
  });
}

function pipeEmit(event, event2, prefix = "") {
  const old = event.emit;
  event.emit = function (event, ...args) {
    old.emit(event, ...args);
    event2.emit(prefix + event, ...args);
  };
  return {
    unpipeEmit() {
      event.emit = old;
    },
  };
}

function keepAlive() {
  const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;
  if (/(\/\/|\.)undefined\./.test(url)) return;
  setInterval(() => {
    fetch(url).catch(console.error);
  }, 5 * 1000 * 60);
}
// Dynamic import that works with CommonJS
import("./keep_alive.cjs").then((module) => {
  // module.default would be the exported value from the CommonJS keep_alive module
  const keep_alive = module.default;
  // Continue with the rest of your logic here where keep_alive is used
});

export default connect;

function setRandom() {
  return new Promise(p => {
    setTimeout(function() {
      p(Math.random().toString());
    }, 1000);
  });
}

function displayRandom(rndNum) {
  return new Promise(p => {
    setTimeout(function() {
      p("Hello World: " + rndNum);
    }, 1000);
  });
}

async function handleHTTP(req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });

      rndNum = await setRandom();
      displayString = await displayRandom(rndNum);

      res.write(displayString);
      res.end();
    } else {
      res.writeHead(403);
      res.end("ERROR!");
    }
  } else {
    res.writeHead(403);
    res.end("ERROR!");
  }
}
var rndNum;
var host = "localhost";
var port = 8006;
var http = require("http");
var http_serv = http.createServer(handleHTTP).listen(port, host);

import http from "http"

let server = http.createServer();

let handleRequest = (req, res) => {
    console.log("method:", req.method);
    console.log("url/uri/path: ", req.url);
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello from Node server");
};

server.on("request", handleRequest);

server.listen(9999, () =>{
    console.log("Now listening on port 9999");
});
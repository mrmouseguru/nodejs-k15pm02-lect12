import express from "express"

let app = express();

app.get("/text/hello", (req, res) =>{
    res.send("Hello from express server");
});

//GET: /api/text
// read text from myfile.txt (fs)
//response text to client

app.use("/files", express.static("public"));

//
app.get("/api/students/:id", (req, res) =>{
    let studentId = req.params.id;
    console.log("student id: " , studentId);
    let name = req.query.name;
    let address = req.query.address;

    //res.send(`Hello ${studentId} ${name} ${address}`);
    res.json({
        id: studentId,
        na : name,
        add: address
    });
})


app.listen(8888, () =>{
    console.log("Now listening on port 8888");
});
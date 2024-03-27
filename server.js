const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
app.use(express.json())

mongoose.connect(
    "mongodb+srv://waelbouraoui0:55668818@cluster0.vczwx3d.mongodb.net/myfirstapp?retryWrites=true&w=majority&appName=Cluster0"
)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

app.use("/", require('./routes/userroute'))

app.listen(port, (err) => {
    err ? console.log("error:", err) : console.log("server in running in port:", port)
})
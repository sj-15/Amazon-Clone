const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');

const PORT = 3000;
const app = express();
const DB = "mongodb+srv://sj15:Sourav6996@cluster0.i4msquv.mongodb.net/?retryWrites=true&w=majority";

//Middleware
app.use(authRouter);

//Connections
mongoose.connect(DB).then(() => {
    console.log("Connection succesful");
}).catch((e) => {
    console.log(e);
});
app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at Port ${PORT}`);
});
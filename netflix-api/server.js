const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes")

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://as7686854:AbhiPost123@cluster0.oqkknfq.mongodb.net/Likedlist?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("DB connected");
})

app.use("/api/user",userRoutes);

app.listen(5000,console.log("server started"));
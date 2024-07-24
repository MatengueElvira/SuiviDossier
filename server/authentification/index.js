require("dotenv").config();
const express=require("express");
const app =express();
const  cors=require("cors");
const connection=require("./bd");

const userRoutes=require("./routes/users.");
const  authRoutes=require("./routes/auth");
//creation des middlewares
app.use(express.json());
app.use(cors());
//routes
app.use("/api/users",userRoutes);
app.use("/api/auth", authRoutes);

const { Connection } = require("mongoose");
//connectio à la base d donnée
connection();

const port =process.env.PORT||8080;
app.listen(port,() => console.log(`ecoute au port ${port}...`));
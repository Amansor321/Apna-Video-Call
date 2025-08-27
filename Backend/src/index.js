const express= require("express");
const app = express();
const http = require("http");       // core http module

 const { Server}  = require("socket.io");
 const mongoose= require("mongoose");
 const {connectToSocket} = require("./controllers/socketManager.js");
 const dotenv= require("dotenv");
 const userRoutes= require("./routes/userRoutes.js");

 dotenv.config();
// app.use(express.json());

const cors = require('cors');
app.use(cors({
  origin: "http://localhost:5173", // frontend
  credentials: true
}));



const server = http.createServer(app);
const io = connectToSocket(server);


app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));


// routes
app.use("/api/auth",userRoutes);




mongoose.connect("mongodb+srv://soroutaman321:wUYcHF3tT0ruXoPo@cluster0.keplpti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB error:", err));

app.get("/",(req,res)=>{
    res.send("hello");
})


// Start server
server.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});

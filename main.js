import express from "express";
import trackRoutes from "./routes/trackno.js";

const app=express();
const port=6969;
app.get('/',(req,res) => {
    res.json({msg: "cybertechninja" });
});

// crud functions
// app.get('/trackno', () => {

// })

// app.post('/trackno', () => {

// })

// app.put('/trackno/:id', () =>{

// })

// app.delete('/trackno/:id',() => {
    
// })

// middleware

app.use('/trackno',trackRoutes);
app.listen(port, () => {
    console.log(`CyberTechNinja is running on the server http://localhost:${port}`);
});
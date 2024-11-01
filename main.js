import express from "express";

const app=express();
const port=6969;
app.get('/',(req,res) => {
    res.json({msg: "cybertechninja" });
});

// crud functions
app.get('/trackno', () => {

})

app.post('/trackno', () => {

})

app.put('/trackno/:id', () =>{

})

app.delete('/trackno/:id',() => {
    
})
app.listen(port, () => {
    console.log(`CyberTechNinja is running on the server http://localhost:${port}`);
});
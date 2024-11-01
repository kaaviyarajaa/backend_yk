import express from "express";


const router=express.Router();


// crud functions
router.get("/", (req,res) => {
  res.send("Get all mobile numbers");
});

router.post("/", (req,res) => {
   res.send("Create an account");
});

router.put("/:id", (req,res) =>{
   res.send("Update the details");
});

router.delete("/:id",(req,res) => {
    res.send("Delete the phone number");
});

export default router;
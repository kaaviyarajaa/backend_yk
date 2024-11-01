import express from "express";
import { Acccreate, Accdelete, Accupdate, TrackIndex } from "../controllers/trackno.controller.js";


const router=express.Router();


// crud functions
router.get("/",TrackIndex);

router.post("/",Acccreate);

router.put("/:id",Accupdate);

router.delete("/:id",Accdelete);

export default router;
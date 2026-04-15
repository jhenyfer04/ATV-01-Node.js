import express from "express";

const router = express.Router();

router.get("/perfil", function(req, res){
    res.send("perfil")
});

export default router;
import express from "express";

const router = express.Router();

router.get("/curiosidade", function(req, res){
    res.render("curiosidade")
});

export default router;
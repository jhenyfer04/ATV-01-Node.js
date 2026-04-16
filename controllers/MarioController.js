import express from "express";

const router = express.Router();

router.get("/mario", function(req, res){
    res.render("mario")
});

export default router;
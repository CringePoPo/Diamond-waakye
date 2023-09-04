import express from "express";
import ejs from "ejs";

const router = express.Router()

// HOme route
router.get("/", (req, res, next) => {
    res.render("home")
})


export default router;
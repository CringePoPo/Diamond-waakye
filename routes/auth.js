import express from "express";
import ejs from "ejs";

const router = express.Router()

// Auth route
router.get("/login", (req, res, next) => {
    res.render("login")
})

// log out route
router.get("/logout", (req, res)=>{
    // handle with passport
    res.send("Loggin out ")
})
// google auth route
router.get("/google", (req, res)=>{
    // handle with passport js
    res.send("Loggin in with google")
})


export default router;
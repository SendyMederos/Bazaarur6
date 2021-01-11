const router = require("express").Router();
router.get("/hc", function(req, res){
    res.send("ok")
});
const apiRoutes = require("./api/index");

// API Routes
router.use("/api", apiRoutes);
router.get("/logout", function(req, res) {
    res.clearCookie('bazaar6_cookie')
    return res.sendStatus(200);
})
router.get("/checkcookie", function(req, res) {
    return req.cookies.bazaar6_cookie ? res.sendStatus(200) : false
})

module.exports = router;
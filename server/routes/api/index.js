const router = require("express").Router();
const articleRoutes = require("./article-routes");

router.use("/articles", articleRoutes);

module.exports = router;

const router = require("express").Router();
const { getAllArticles } = require("../../controllers/article-controller");

router.route("/").get(getAllArticles);

module.exports = router;

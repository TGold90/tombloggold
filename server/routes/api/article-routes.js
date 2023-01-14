const router = require("express").Router();
const {
  getAllArticles,
  getOneArticle,
} = require("../../controllers/article-controller");

router.route("/").get(getAllArticles);
router.route("/:id").get(getOneArticle);
module.exports = router;

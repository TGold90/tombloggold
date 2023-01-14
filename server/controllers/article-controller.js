const { Article } = require("../models");

module.exports = {
  async getAllArticles(req, res) {
    const allArticles = await Article.find({});

    if (!allArticles) {
      return res.status(400).json({ message: "No articles found!" });
    }
    res.status(200).json(allArticles);
  },
  async getOneArticle({ params }, res) {
    const oneArticle = await Article.findOne({ _id: params.id });

    if (!oneArticle) {
      return res.status(400).json({ message: "No article found by that id" });
    }

    res.status(200).json(oneArticle);
  },
};

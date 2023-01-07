const { Article } = require("../models");

module.exports = {
  async getAllArticles(req, res) {
    const allArticles = await Article.find({});

    if (!allArticles) {
      return res.status(400).json({ message: "No articles found!" });
    }
    res.status(200).json(allArticles);
  },
};

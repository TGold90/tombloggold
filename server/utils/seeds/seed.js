const db = require("../../config/connection");
const { Article } = require("../../models");

const articles = require("./articles.json");

db.once("open", async () => {
  await Article.deleteMany({});

  const newArticles = await Article.insertMany(articles);

  console.log("Articles seeded!");
  process.exit(0);
});

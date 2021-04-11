const express = require("express"),
  api = express.Router();

api.get("/", async (req, res) => {
  await res.status(200).send({
    message: "api funcionando correctamente"
  })
})
  .get("/animes", function (req, res) {
    res.send("Steins gate, shiki, darker than black");
  })
  .get("/anime/:name", function (req, res) {
    res.send("El anime que buscas es : " + req.params.name);
  })
// .post("/anime", Anime.postAnime)
// .delete("/anime/:name", Anime.deleteAnime)
// .put("/anime/:name", Anime.putAnime);

module.exports = api;
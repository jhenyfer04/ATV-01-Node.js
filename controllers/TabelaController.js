import express from "express";

const router = express.Router();

router.get("/tabela", function (req, res) {
  const tabela = [
    { jogo: "Mario Kart 8 Deluxe", ano: 2017 },
    { jogo: "Animal Crossing: New Horizons ", ano: 2020 },
    { jogo: "Super Smash Bros. Ultimate", ano: 2018 },
    { jogo: "The Legend of Zelda: Breath of the Wild ", ano: 2017 },
  ];
  res.render("tabela", {
    tabela: tabela,
  });
});

export default router;

import express from "express";
import galinha from "../Services/GalinhaService";

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  return res.send("Hello, world!");
});


app.get("/galinha", galinha.verGalinhas)
app.post("/galinha", galinha.insereGalinha)
app.delete("/galinha/:nome", galinha.mataGalinha)
app.get("/galinha-detalhadas", galinha.verGalinhasVivas)

app.listen(3001);

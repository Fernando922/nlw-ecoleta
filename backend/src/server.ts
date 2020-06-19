import express from "express";
import path from "path";
import routes from "./routes";
import cors from "cors";
import { errors } from "celebrate";

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

//servir arquivos estáticos
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(3333, () => {
  console.log("server rodando na porta 3333");
});

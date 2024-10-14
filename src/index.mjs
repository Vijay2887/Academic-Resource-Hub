import express from "express";
import path from "path";
import route from "./routes/contentRoute.mjs";
import { fileURLToPath } from "url";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(helmet()); 
app.use(morgan("dev")); 
app.use(express.static(path.join(__dirname)));
app.use(route);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {});

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "welcome.html"));
});

import { response, Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const route = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//not available route
route.get("/api/not-available", (request, response) => {
  response.status(404).send("<h2>File not available :(</h2>");
});

// compiler design route
route.get("/api/show-cd-content", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "contents", "cdContent.html"));
});

//data mining route
route.get("/api/show-dm-content", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "contents", "dmContent.html"));
});

//natural language processing route
route.get("/api/show-nlp-content", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "contents", "nlpContent.html"));
});

// eea route
route.get("/api/show-eea-content", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "contents", "eeaContent.html"));
});

//management fundamentals route
route.get("/api/show-mf-content", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "contents", "mfContent.html"));
});

//computer network route
route.get("/api/show-cn-content", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "contents", "cnContent.html"));
});

//formal languages and automata theroy route
route.get("/api/show-flat-content", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "contents", "flatContent.html"));
});

//software engineering and modeling route
route.get("/api/show-sem-content", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "contents", "semContent.html"));
});

//cloud computing route
route.get("/api/show-cc-content", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "contents", "ccContent.html"));
});

//java oop route
route.get("/api/show-oop-content", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "contents", "javaContent.html"));
});
export default route;

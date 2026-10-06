import express, {type Application } from "express";
import {type fileURLToPath } from "url";
import path from "path";

const app: Application = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
// const PORT = 5000;

// app.use(express.json());

// app.get("/", (_req, res) => {
//   res.json({
//     message: "Express + TypeScript server is running!",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
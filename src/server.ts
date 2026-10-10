import { Server } from "node:http";
import app from "./app.js";


let server:Server | undefined;
const PORT = process.env.PORT || 5000;

function main() {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

main();
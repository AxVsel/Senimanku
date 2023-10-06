import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import api from "./routes/api";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000; // Gunakan nilai default 3000 jika PORT tidak ditentukan di .env

app.get('/', (req: Request, res: Response) => {
  res.send('Express ini berjalan')
});

// Middleware
app.use(express.json());

// Routing API
app.use("/api", api);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

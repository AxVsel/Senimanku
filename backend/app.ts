import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
// import api from "./routes/api";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.get('/', (req: Request, res: Response) => {
  res.send('Express ini berjalan')
});
// middleware
app.use(express.json());
// app.use("/api", api);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
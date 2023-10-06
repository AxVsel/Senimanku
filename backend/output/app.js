"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = __importDefault(require("./routes/api"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000; // Gunakan nilai default 3000 jika PORT tidak ditentukan di .env
app.get('/', (req, res) => {
    res.send('Express ini berjalan');
});
// Middleware
app.use(express_1.default.json());
// Routing API
app.use("/api", api_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

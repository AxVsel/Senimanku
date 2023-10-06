"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
;
const following_controller_1 = __importDefault(require("../controllers/following-controller"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Selamat Datang di senimanku");
});
// Rute untuk mengambil daftar followings
router.get('/followings', following_controller_1.default.index);
// Rute untuk membuat following baru
router.post('/followings', following_controller_1.default.store);
// Rute untuk memperbarui following berdasarkan ID
router.put('/followings/:id/update', following_controller_1.default.update);
// Rute untuk menghapus following berdasarkan ID
router.delete('/followings/:id/delete', following_controller_1.default.delete);
exports.default = router;

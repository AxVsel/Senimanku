"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class FollowingController {
    prisma;
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    index = async (_, res) => {
        try {
            const followings = await this.prisma.following.findMany();
            res.json(followings);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    store = async (req, res) => {
        const payload = req.body;
        try {
            const following = await this.prisma.following.create({
                data: {
                    users: payload.users,
                },
            });
            res.json(following);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    update = async (req, res) => {
        try {
            const payload = req.body;
            const id = parseInt(req.params.id);
            const following = await this.prisma.following.update({
                where: { id: id },
                data: {
                    users: payload.users,
                }
            });
            res.json(following);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    delete = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            await this.prisma.following.delete({
                where: {
                    id: id
                }
            });
            res.json({ message: "Followers berhasil di hapus" });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
}
exports.default = new FollowingController();

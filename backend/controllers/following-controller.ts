import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { title } from 'process';

class FollowingController {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }

    index = async (_: Request, res: Response) => {
        try {
            const followings = await this.prisma.following.findMany();
            res.json(followings);
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    };

    store = async (req: Request, res: Response) => {
        const payload = req.body;
        try {
            const following = await this.prisma.following.create({
                data: {
                    users: payload.users,
                },
            });
            res.json(following);
        } catch ( error: any ){
            res.status(500).json({ error: error.message });
        }
    }

    update = async ( req: Request, res: Response) => {
        try {
            const payload = req.body;
            const id = parseInt(req.params.id);
            const following = await this.prisma.following.update({
                where: {id: id},
                data: {
                    users: payload.users,
                }
            });
            res.json(following);
        } catch ( error: any ) {
            res.status(500).json({error: error.message });
        }
    }

    delete = async ( req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            await this.prisma.following.delete({
                where: {
                    id: id
                }
            });
            res.json( { message: "Followers berhasil di hapus"});
        } catch ( error: any) {
            res.status(500).json({error: error.message});
        }
    }
}

export default new FollowingController();
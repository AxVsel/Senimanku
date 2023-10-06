import { Router, Request, Response } from "express";;
import FollowingController from "../controllers/following-controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Selamat Datang di senimanku");
});

// Rute untuk mengambil daftar followings
router.get('/followings', FollowingController.index);

// Rute untuk membuat following baru
router.post('/followings', FollowingController.store);

// Rute untuk memperbarui following berdasarkan ID
router.put('/followings/:id/update', FollowingController.update);

// Rute untuk menghapus following berdasarkan ID
router.delete('/followings/:id/delete', FollowingController.delete);

export default router;

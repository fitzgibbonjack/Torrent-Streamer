import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.json({
		active: true,
	});
});

export default router;

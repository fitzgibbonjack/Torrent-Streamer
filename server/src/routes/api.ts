import express, { Router, Request, Response } from "express";

const router: Router = express.Router();
let WebTorrent = require("webtorrent");

router.post("/download-torrent", (req: Request, res: Response) => {
	const magnet = req.body.magnet;
	const client = new WebTorrent();

	console.log(`Downloading: ${magnet}`);

	res.json({
		active: true,
	});
});

export default router;

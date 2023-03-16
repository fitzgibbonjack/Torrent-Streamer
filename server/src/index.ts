import express, { Express } from "express";
import routes from "./routes/index.js";

const app: Express = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});

app.use("/api", routes);

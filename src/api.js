const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Game = require("./models/games");

const PORT = process.env.PORT || 3005;

const router = express.Router();

const app = express();

app.use(cors());

mongoose.connect(process.env.DATABASE_URL);

router.get("/", (req, res) => {
	res.send("Hello World");
});

router.post("/games", async (req, res) => {
	const { name, score } = req.query;

	// add a new game entry to database
	await Game.create({
		name,
		score,
	});

	const games = await Game.find(); //mongoose
	res.send(games);
});

router.get("/games", async (req, res) => {
	const games = await Game.find();
	res.send(games);
});

app.use(`/.netlify/functions/api`, router); // path must match the path you set in the Netlify Functions file

// // Old way of doing things
// router.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`);
// });

const handler = serverless(app);
module.exports.handler = async (event, context) => {
	 let res = await handler(event, context);
	 return res;
}
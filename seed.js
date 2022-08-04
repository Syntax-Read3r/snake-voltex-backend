const mongoose = require("mongoose");
require("dotenv").config();
const Game = require("./models/games");

//run a function without our mongoose

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
	await Game.create({
		name: "Jmike",
		score: 10,
	});

    await Game.create({
		name: "JOsfdN",
		score: 13002,
	});
    await Game.create({
		name: "JON",
		score: 12,
	});

	console.log("Seeded");
}

seed();

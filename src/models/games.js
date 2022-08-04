const mongoose = require('mongoose');

const {Schema} = mongoose;

const gamesSchema = new Schema({
    name: String,
    score: Number,
})

const Game = mongoose.model('Game', gamesSchema);

module.exports = Game;
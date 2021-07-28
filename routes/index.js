'use strict'

const express = require('express');
const PlayersModel = require('../models/PlayersModel');
const router = express.Router();
const slugify = require('slugify');

router.get('/', async (req, res) => {
   
       const players = await PlayersModel.getAll();
       res.json(players).status(200);
})

module.exports = router;
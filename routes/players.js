'use strict'

const express = require('express');
const PlayersModel = require('../models/PlayersModel');
const router = express.Router();
const slugify = require('slugify');

router.get('/', async (req, res) => {

    if (req.params.slug) {
        const {slug} = req.params.slug;
        const player = await PlayersModel.getBySlug(slug);

        if (player) {
            res.json(player).status(200);

        } else {
            res.status(400).send(`Player not found', ${slug}).`);
        }
       
    } else {

        const players = await PlayersModel.getAllPlayers();
    res.json(players).status(200);
    }
    
})

module.exports = router;
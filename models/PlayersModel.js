'use strict';
const db = require('./conn');

class PlayersModel {
    constructor(id, player_name, slug, year_awarded) {
        this.id = id;
        this.player_name = player_name;
        this.slug = slug;
        this.year_awarded = year_awarded;
    }
    static async getAll() {
        try {
            const response = await db.any(
                `SELECT * FROM players;`
            )
                
            return response;

        } catch (error) {
            console.error('ERROR:', error);
            return error;
        }
    }
    static async getBySlug(slug) {
        try {
            const response = await db.one(`SELECT * FROM players WHERE slug = '${slug}';`
            );

            return response;
        } catch (error) {
            console.error('ERROR:', error);
            return error;
        }
    }

}

module.exports = PlayersModel;

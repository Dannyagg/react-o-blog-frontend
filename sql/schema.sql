CREATE TABLE players(
    id serial PRIMARY KEY,
    player_name text  NOT NULL,
    slug text,
    year_awarded INTEGER
);


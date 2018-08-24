CREATE TABLE album (
    id serial PRIMARY KEY,
    name varchar,
    year varchar,
    artist_id integer REFERENCES artist (id)
);

CREATE TABLE artist (
    id serial PRIMARY KEY,
    name varchar
);

CREATE TABLE track (
    id serial PRIMARY KEY,
    name varchar,
    duration integer,
    album_id integer REFERENCES album (id),
    artist_id integer REFERENCES artist (id)
)
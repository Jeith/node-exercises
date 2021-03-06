CREATE TABLE artist (
    id serial PRIMARY KEY,
    name varchar
);

CREATE TABLE album (
    id serial PRIMARY KEY,
    name varchar,
    release integer
);

CREATE TABLE song (
    id serial PRIMARY KEY,
    name varchar,
    duration integer,
    album_id integer REFERENCES album (id),
    artist_id integer REFERENCES artist (id)
);

INSERT INTO artist 
    (name)
VALUES (
    'Stevie Wonder'
);

INSERT INTO artist 
    (name)
VALUES (
    'Patrice Rushen'
);

INSERT INTO artist 
    (name)
VALUES (
    'Bjork'
);

INSERT INTO artist 
    (name)
VALUES (
    'Astrud Gilberto'
);

INSERT INTO artist 
    (name)
VALUES (
    'Roy Ayers'
);

INSERT INTO album 
    (name, release)
VALUES (
    'Songs in the Key of Life', 1976
);

INSERT INTO album 
    (name, release)
VALUES (
    'Straight from the Heart', 1982
);

INSERT INTO album 
    (name, release)
VALUES (
    'Debut', 1993
);

INSERT INTO album 
    (name, release)
VALUES (
    'Post', 1995
);

INSERT INTO album 
    (name, release)
VALUES (
    'The Shadow of your Smile', 1965
);

INSERT INTO album 
    (name, release)
VALUES (
    'Vibrations', 1976
);

INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'Ordinary Pain', 383, 1, 1
);
INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'Another Star', 504, 1, 1
);
INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'As', 428, 1, 1
);

INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'Remind Me', 317, 2, 2
);
INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'Forget Me Nots', 276, 2, 2
);

INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'Crying', 290, 3, 3
);
INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'One Day', 324, 3, 3
);
INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'Hyperballad', 321, 3, 4
);
INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'Army of Me', 321, 3, 4
);
INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'Its Oh So Quiet', 218, 3, 4
);

INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'Manha de Carnaval', 118, 4, 5
);
INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'Fly Me to the Moon', 143, 4, 5
);

INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'Searching', 241, 5, 6
);
INSERT INTO song 
    (name, duration, artist_id, album_id)
VALUES (
    'The Memory', 272, 4, 5
);


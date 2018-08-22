CREATE TABLE artist (
    id serial PRIMARY KEY,
    name varchar
);

CREATE TABLE album (
    id serial PRIMARY KEY,
    name varchar,
    release integer,
    artist_id integer REFERENCES artist (id)
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
    (name, release, artist_id)
VALUES (
    'Songs in the Key of Life', 1976, 1
);

INSERT INTO album 
    (name, release, artist_id)
VALUES (
    'Straight from the Heart', 1982, 2
);

INSERT INTO album 
    (name, release, artist_id)
VALUES (
    'Debut', 1993, 3
);

INSERT INTO album 
    (name, release, artist_id)
VALUES (
    'Post', 1995, 3
);

INSERT INTO album 
    (name, release, artist_id)
VALUES (
    'The Shadow of your Smile', 1965, 4
);

INSERT INTO album 
    (name, release, artist_id)
VALUES (
    'Vibrations', 1976, 5
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
-- 1
SELECT song.name, artist.name 
    FROM song 
    INNER JOIN artist ON song.artist_id = artist.id AND artist.name = 'Bjork';
-- 2
SELECT artist.name, album.name 
    FROM album 
    INNER JOIN artist ON album.artist_id = artist.id AND artist.name = 'Bjork';
-- 3
SELECT MAX(song.duration)
    FROM song; 
-- 4
SELECT album.name, album.release
    FROM album
    WHERE album.release >= 1960 AND album.release <= 1969;
-- 5
SELECT album.name, album.release
    FROM album
    WHERE album.release >= 1990 AND album.release <= 1999;
-- 6
select
	*
from
	artist
join
	album on artist.id = album.artist_id
where
	album.release = (
		select
			max(album.release)
		from
			album
		where
			album.artist_id = artist.id
	);
-- 7
SELECT album.name, SUM(song.duration)
    FROM album, song
    WHERE album.id = song.album_id
    GROUP BY album.name;
-- 8
SELECT album.name, SUM(song.duration)
    FROM album, song
    WHERE album.id = song.album_id
    GROUP BY album.name LIMIT 1;
-- 9
SELECT
	artist.name,
	count(album.name)
FROM
	artist
LEFT OUTER JOIN
	album on artist.id = album.artist_id
GROUP BY
	artist.id
LIMIT
	5;
-- 10
SELECT artist.name, song.name 
    FROM artist 
    INNER JOIN song ON artist.id = song.artist_id AND artist.name = 'Bjork';

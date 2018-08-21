CREATE TABLE restaurant (
    name varchar,
    distance integer,
    stars integer,
    category varchar,
    favorite_food varchar,
    takeout varchar,
    last_time_ate varchar
);

INSERT INTO restaurant VALUES (
    'Little Tokyo', 23, 5, 'Japanese', 'sushi', 'True', 'yesterday'
);

INSERT INTO restaurant VALUES (
    'Torchies', 16, 4, 'Mexican', 'tacos', 'True', '5 days ago'
);

INSERT INTO restaurant VALUES (
    'Bibis', 30, 3, 'Greek', 'gyros', 'True', '2 weeks ago'
);

INSERT INTO restaurant VALUES (
    'Tofu Village', 15, 4, 'Korean', 'kimchi', 'False', '1 month ago'
);

SELECT name FROM restaurant WHERE stars = 5;
SELECT favorite_food FROM restaurant WHERE stars = 5;
SELECT id FROM restaurant WHERE name = 'Little Tokyo';
SELECT name FROM restaurant WHERE category = 'Korean';
SELECT name FROM restaurant WHERE takeout = 'True';
SELECT name FROM restaurant WHERE takeout = 'True' AND category = 'Mexican';
SELECT name FROM restaurant WHERE distance < 16;
SELECT name FROM restaurant WHERE distance < 24 AND stars < 5;

SELECT * FROM restaurant
ORDER BY distance;
SELECT * FROM restaurant
ORDER BY distance
limit 2;
SELECT * FROM restaurant
ORDER BY stars
limit 2;
SELECT * FROM restaurant
ORDER BY distance <= 24
limit 2;
select count(*) from restaurant;
select category, count(*) from restaurant group by category;
select category, avg(stars) from restaurant group by category;
select category, max(stars) from restaurant group by category;
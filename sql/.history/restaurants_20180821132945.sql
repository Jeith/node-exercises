CREATE TABLE restaurant (
    id serial PRIMARY KEY,
    name varchar,
    address varchar,
    category varchar
);

CREATE TABLE reviewer (
    id serial PRIMARY KEY,
    name varchar,
    email varchar,
    karma integer check (karma >= 0 and karma <= 7)
);

CREATE TABLE review (
    id serial PRIMARY KEY,
    reviewer_id integer REFERENCES reviewer (id),
    stars integer check (stars >= 0 and stars <= 5),
    title varchar,
    review varchar,
    restaurant_id integer REFERENCES restaurant (id)
);

INSERT INTO restaurant 
    (name, address, category)
VALUES (
    'Little Tokyo', '2314 Village Ave', 'Japanese'
);

INSERT INTO restaurant 
    (name, address, category)
VALUES (
    'Torchies', '1410 Ghana Rd', 'Mexican'
);

INSERT INTO restaurant 
    (name, address, category)
VALUES (
    'Bibis', '3526 Center St', 'Greek'
);

INSERT INTO restaurant 
    (name, address, category)
VALUES (
    'Tofu Village', 'Bellaire Blvd', 'Korean'
);

INSERT INTO reviewer 
    (name, email, karma)
VALUES (
    'Keith', 'keith0812@yahoo.com', 7
);

INSERT INTO reviewer 
    (name, email, karma)
VALUES (
    'Xi', 'x02i@yahoo.com', 5
);

INSERT INTO reviewer 
    (name, email, karma)
VALUES (
    'Jon', 'J0n98@yahoo.com', 7
);

INSERT INTO review 
    (title, review, stars, reviewer_id, restaurant_id)
VALUES (
    'Great', 'Its great food', 4, 1, 4
);

INSERT INTO review 
    (title, review, stars, reviewer_id, restaurant_id)
VALUES (
    'fantastic', 'Its fantastic food', 5, 2, 4
);

INSERT INTO review 
    (title, review, stars, reviewer_id, restaurant_id)
VALUES (
    'bad', 'Its bad food', 1, 2, 1
);

INSERT INTO review 
    (title, review, stars, reviewer_id, restaurant_id)
VALUES (
    'Not the best', 'It isnt great food', 4, 2, 2
);

INSERT INTO review 
    (title, review, stars, reviewer_id, restaurant_id)
VALUES (
    'Okay', 'Its Okay food', 4, 3, 3
);

SELECT review FROM review WHERE restaurant_id = 4;
SELECT review FROM review, restaurant WHERE restaurant.name = "Torchies";
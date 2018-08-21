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
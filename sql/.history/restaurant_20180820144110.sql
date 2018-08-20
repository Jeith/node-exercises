CREATE TABLE restaurant (
    name varchar,
    distance integer,
    stars integer,
    category varchar,
    favorite_dish varchar,
    takeout varchar,
    last_time_ate varchar
);

ALTER TABLE restaurant
  ADD column_name column-definition;

INSERT INTO restaurant VALUES (
    "Little Tokyo", 23, 5, "Japanese", "sushi", "True", "yesterday"
);
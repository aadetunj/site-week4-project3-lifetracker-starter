CREATE TABLE users (
    id         SERIAL PRIMARY KEY,
    username  TEXT NOT NULL,
  hash_password   TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name  TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1)
 
);

CREATE TABLE nutrition (
     id  SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
    category  TEXT NOT NULL,
    calories INTEGER,
    image_url TEXT NOT NULL
);


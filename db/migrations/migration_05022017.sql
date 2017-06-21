

CREATE TABLE IF NOT EXISTS categories (
  id BIGSERIAL PRIMARY KEY,
  category_type VARCHAR(255)
); 

CREATE TABLE IF NOT EXISTS sizes (
  id BIGSERIAL PRIMARY KEY,
  size_type VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(1024),
  category_id INTEGER REFERENCES categories(id),
  price DECIMAL,
  quantity INTEGER,
  size_id INTEGER REFERENCES sizes(id)
);
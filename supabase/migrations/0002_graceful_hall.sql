/*
  # Add Initial Products and Categories

  1. Categories Data
    - Add all product categories with icons
  2. Products Data
    - Add products for each category
    - Include detailed product information
*/

-- Insert Categories
INSERT INTO categories (name, slug, icon) VALUES
  ('Electronics', 'electronics', 'smartphone'),
  ('Laptops', 'laptops', 'laptop'),
  ('TVs', 'tvs', 'tv'),
  ('Audio', 'audio', 'headphones'),
  ('Cameras', 'cameras', 'camera'),
  ('Watches', 'watches', 'watch'),
  ('Fashion', 'fashion', 'shirt'),
  ('Home', 'home', 'home'),
  ('Gaming', 'gaming', 'gamepad'),
  ('Accessories', 'accessories', 'package');

-- Electronics
INSERT INTO products (name, slug, description, price, image, category_id, stock) VALUES
  ('iPhone 15 Pro', 'iphone-15-pro', 'Latest iPhone with A17 Pro chip', 119900, 'https://images.unsplash.com/photo-1695048133142-1a20484d2569', (SELECT id FROM categories WHERE slug = 'electronics'), 50),
  ('Samsung Galaxy S24 Ultra', 'samsung-s24-ultra', 'Premium Android flagship with AI features', 129999, 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c', (SELECT id FROM categories WHERE slug = 'electronics'), 40),
  ('Google Pixel 8 Pro', 'pixel-8-pro', 'Best camera phone with Android', 89999, 'https://images.unsplash.com/photo-1696426051739-ee59cfd5b15e', (SELECT id FROM categories WHERE slug = 'electronics'), 30);

-- Laptops
INSERT INTO products (name, slug, description, price, image, category_id, stock) VALUES
  ('MacBook Pro 16"', 'macbook-pro-16', 'M3 Max chip, 32GB RAM', 249900, 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8', (SELECT id FROM categories WHERE slug = 'laptops'), 25),
  ('Dell XPS 15', 'dell-xps-15', 'Intel i9, RTX 4070', 179999, 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45', (SELECT id FROM categories WHERE slug = 'laptops'), 20),
  ('Lenovo ThinkPad X1', 'thinkpad-x1', 'Business laptop with Intel i7', 139999, 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0', (SELECT id FROM categories WHERE slug = 'laptops'), 30);

-- TVs
INSERT INTO products (name, slug, description, price, image, category_id, stock) VALUES
  ('LG C3 65" OLED', 'lg-c3-oled', '4K OLED Smart TV', 229999, 'https://images.unsplash.com/photo-1593784991095-a205069470b6', (SELECT id FROM categories WHERE slug = 'tvs'), 15),
  ('Samsung QN90C', 'samsung-qn90c', '65" Neo QLED 4K TV', 199999, 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a', (SELECT id FROM categories WHERE slug = 'tvs'), 20),
  ('Sony A95L', 'sony-a95l', '65" QD-OLED TV', 299999, 'https://images.unsplash.com/photo-1593784991095-a205069470b6', (SELECT id FROM categories WHERE slug = 'tvs'), 10);

-- Audio
INSERT INTO products (name, slug, description, price, image, category_id, stock) VALUES
  ('Sony WH-1000XM5', 'sony-wh1000xm5', 'Premium noise cancelling headphones', 34999, 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb', (SELECT id FROM categories WHERE slug = 'audio'), 100),
  ('AirPods Pro 2', 'airpods-pro-2', 'Wireless earbuds with ANC', 24999, 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5', (SELECT id FROM categories WHERE slug = 'audio'), 150),
  ('JBL Flip 6', 'jbl-flip-6', 'Portable Bluetooth speaker', 9999, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1', (SELECT id FROM categories WHERE slug = 'audio'), 80);

-- Cameras
INSERT INTO products (name, slug, description, price, image, category_id, stock) VALUES
  ('Sony A7 IV', 'sony-a7-iv', 'Full-frame mirrorless camera', 249999, 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32', (SELECT id FROM categories WHERE slug = 'cameras'), 20),
  ('Canon R6 Mark II', 'canon-r6-ii', 'Professional mirrorless camera', 219999, 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd', (SELECT id FROM categories WHERE slug = 'cameras'), 25),
  ('Fujifilm X-T5', 'fujifilm-xt5', 'Premium APS-C camera', 179999, 'https://images.unsplash.com/photo-1621520291095-aa6c7137f048', (SELECT id FROM categories WHERE slug = 'cameras'), 30);

-- Watches
INSERT INTO products (name, slug, description, price, image, category_id, stock) VALUES
  ('Apple Watch Ultra 2', 'apple-watch-ultra-2', 'Premium smartwatch', 89900, 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d', (SELECT id FROM categories WHERE slug = 'watches'), 50),
  ('Samsung Galaxy Watch 6', 'galaxy-watch-6', 'Advanced health tracking', 34999, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', (SELECT id FROM categories WHERE slug = 'watches'), 60),
  ('Garmin Fenix 7', 'garmin-fenix-7', 'Premium sports watch', 79999, 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6', (SELECT id FROM categories WHERE slug = 'watches'), 30);

-- Fashion
INSERT INTO products (name, slug, description, price, image, category_id, stock) VALUES
  ('Nike Air Max', 'nike-air-max', 'Premium comfort sneakers', 12999, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', (SELECT id FROM categories WHERE slug = 'fashion'), 100),
  ('Levi''s 501 Original', 'levis-501', 'Classic fit jeans', 5999, 'https://images.unsplash.com/photo-1542272604-787c3835535d', (SELECT id FROM categories WHERE slug = 'fashion'), 200),
  ('Ray-Ban Aviator', 'rayban-aviator', 'Classic sunglasses', 15999, 'https://images.unsplash.com/photo-1572635196237-14b3f281503f', (SELECT id FROM categories WHERE slug = 'fashion'), 150);

-- Home
INSERT INTO products (name, slug, description, price, image, category_id, stock) VALUES
  ('Dyson V15', 'dyson-v15', 'Cordless vacuum cleaner', 54999, 'https://images.unsplash.com/photo-1558317374-067fb5f30001', (SELECT id FROM categories WHERE slug = 'home'), 30),
  ('Philips Air Fryer', 'philips-airfryer', 'Digital air fryer XL', 12999, 'https://images.unsplash.com/photo-1585515320310-259814833e62', (SELECT id FROM categories WHERE slug = 'home'), 50),
  ('iRobot Roomba j7+', 'roomba-j7', 'Smart robot vacuum', 59999, 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73', (SELECT id FROM categories WHERE slug = 'home'), 25);
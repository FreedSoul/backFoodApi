-- WITH thing AS (
--   SELECT id, blah FROM foo
--   WHERE wibble LIKE '%ibble'
-- ),
-- other_thing AS (
--   SELECT id, foo_id, floogle, blah FROM other
--   JOIN thing ON other.foo_id=foo.id
-- )
-- SELECT id, foo_id FROM other_thing
-- JOIN table_i_havent_mentioned_before t ON t.id=other_thing.id

-- WITH ins AS (
--   INSERT INTO core.adr
--     (street, "number", postal_code, city)
--   VALUES
--     ('test 1', '25a', '00912', 'villageman')
--   RETURNING id),
-- ins2 AS (
--   INSERT INTO someothertable
--     (id, something)
--   SELECT id, 'something' FROM ins
--   RETURNING id -- this is necessary for CTE, but not used
-- )
-- INSERT INTO core.adr_information
--   (idref, info)
-- SELECT id, 'test data'
-- FROM ins;

-- 1ft
INSERT INTO dishes (dish_name, available, price, description)
VALUES
    ('Spaghetti Bolognese', true, 12000, 'Classic Italian dish with meat sauce and pasta'),
    ('Chicken Alfredo', true, 15000, 'Creamy Alfredo sauce with grilled chicken and fettuccine'),
    ('Margherita Pizza', true, 18000, 'Simple pizza with tomato, mozzarella, and basil'),
    ('Caesar Salad', true, 9000, 'Fresh romaine lettuce, croutons, Parmesan cheese, and Caesar dressing'),
    ('Beef Stir-Fry', true, 16000, 'Stir-fried beef with mixed vegetables and soy sauce'),
    ('Vegetarian Lasagna', true, 14000, 'Layers of pasta, ricotta cheese, and vegetables'),
    ('Grilled Salmon', true, 22000, 'Juicy grilled salmon with lemon and herbs'),
    ('Caprese Salad', true, 9500, 'Tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze'),
    ('Shrimp Scampi', true, 18000, 'Garlic butter shrimp served over linguine'),
    ('Mushroom Risotto', true, 16000, 'Creamy risotto with mushrooms and Parmesan cheese'),
    ('Chicken Parmesan', true, 17000, 'Breaded chicken topped with marinara sauce and melted cheese'),
    ('Greek Salad', true, 10000, 'Crisp lettuce, tomatoes, cucumbers, olives, and feta cheese'),
    ('Teriyaki Chicken', true, 16000, 'Grilled chicken with sweet teriyaki sauce'),
    ('BBQ Ribs', true, 25000, 'Slow-cooked ribs glazed with barbecue sauce'),
    ('Vegetable Curry', true, 15000, 'Spicy curry with a variety of vegetables'),
    ('Tuna Nicoise Salad', true, 13000, 'Salad with tuna, boiled eggs, olives, and green beans'),
    ('Penne alla Vodka', true, 14000, 'Penne pasta in a creamy tomato and vodka sauce'),
    ('Beef Tacos', true, 12000, 'Tacos filled with seasoned ground beef and toppings'),
    ('Eggplant Parmesan', true, 16000, 'Baked eggplant with marinara sauce and melted cheese'),
    ('Sushi Platter', true, 20000, 'Assorted sushi rolls and sashimi'),
    ('Lemon Garlic Chicken', true, 18000, 'Chicken cooked with lemon, garlic, and herbs'),
    ('pastas con queso', true, 45000, 'Receta de pastas con queso rayado, con un toque de ajo, limón y tomillo'),
    ('Shrimp Pad Thai', true, 17000, 'Stir-fried rice noodles with shrimp, tofu, and peanuts'),
    ('Cesar Salad', true, 9500, 'Classic Caesar salad with croutons and Parmesan cheese'),
    ('Beef and Broccoli', true, 16000, 'Stir-fried beef and broccoli in a savory sauce'),
    ('Caprese Panini', true, 12000, 'Grilled sandwich with mozzarella, tomatoes, and basil'),
    ('Chicken Satay', true, 14000, 'Grilled chicken skewers with peanut sauce'),
    ('Pesto Pasta', true, 13000, 'Pasta with basil pesto, pine nuts, and Parmesan cheese'),
    ('Vegetable Spring Rolls', true, 9000, 'Crispy spring rolls filled with vegetables'),
    ('Tomato Basil Soup', true, 8000, 'Homemade soup with tomatoes and fresh basil'),
    ('Hawaiian Pizza', true, 19000, 'Pizza with ham, pineapple, and mozzarella'),
    ('Beef Kebabs', true, 17000, 'Grilled beef skewers with vegetables'),
    ('Fettuccine Carbonara', true, 16000, 'Creamy pasta with bacon, eggs, and Parmesan cheese'),
    ('Mango Sticky Rice', true, 12000, 'Sweet dessert with sticky rice and ripe mango'),
    ('Chicken Enchiladas', true, 15000, 'Rolled tortillas filled with chicken and topped with sauce'),
    ('Cajun Shrimp Pasta', true, 19000, 'Pasta with spicy Cajun-seasoned shrimp and cream sauce'),
    ('Stuffed Bell Peppers', true, 14000, 'Bell peppers filled with a mixture of rice, beans, and vegetables'),
    ('Chicken Caesar Wrap', true, 11000, 'Wrap with grilled chicken, lettuce, and Caesar dressing'),
    ('Pork Chops', true, 20000, 'Grilled or pan-fried pork chops with seasoning'),
    ('Egg Fried Rice', true, 12000, 'Stir-fried rice with eggs, vegetables, and soy sauce'),
    ('Lemon Meringue Pie', true, 10000, 'Pie with lemon-flavored filling and meringue topping'),
    ('Chicken Noodle Soup', true, 8500, 'Comforting soup with chicken, noodles, and vegetables'),
    ('Vegetarian Burrito Bowl', true, 13000, 'Burrito bowl with rice, beans, vegetables, and salsa'),
    ('Beef and Mushroom Pie', true, 16000, 'Savory pie with beef, mushrooms, and a flaky crust'),
    ('Chicken Teriyaki Bowl', true, 16000, 'Bowl with rice, chicken, and teriyaki sauce'),
    ('Key Lime Pie', true, 9500, 'Pie with tangy key lime filling and graham cracker crust'),
    ('Black Bean Quesadilla', true, 12000, 'Quesadilla filled with black beans and cheese'),
    ('Chicken Shawarma', true, 18000, 'Grilled chicken wrapped in flatbread with veggies and sauce'),
    ('Tiramisu', true, 10000, 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone'),
    ('Chocolate Lava Cake', true, 8000, 'Decadent chocolate cake with a gooey, molten center');

-- 2nd
INSERT INTO ingredients (quantity, price, ingredient_name)
VALUES
    (3, 2000, 'onion'),
    (2, 1500, 'garlic'),
    (1, 500, 'bell pepper'),
    (4, 3000, 'chicken breast'),
    (5, 2500, 'beef'),
    (2, 1000, 'carrot'),
    (3, 1200, 'celery'),
    (1, 800, 'ginger'),
    (4, 1600, 'mushroom'),
    (2, 1800, 'broccoli'),
    (1, 400, 'zucchini'),
    (3, 2200, 'shrimp'),
    (5, 3000, 'pasta'),
    (2, 1000, 'spinach'),
    (1, 700, 'lemon'),
    (4, 1800, 'potato'),
    (3, 2500, 'salmon'),
    (2, 1200, 'soy sauce'),
    (1, 900, 'avocado'),
    (4, 2000, 'black beans'),
    (5, 3000, 'rice'),
    (2, 800, 'cucumber'),
    (3, 1200, 'cheddar cheese'),
    (1, 600, 'basil'),
    (4, 2000, 'olive oil'),
    (3, 1800, 'parmesan cheese'),
    (2, 1000, 'thyme'),
    (5, 3000, 'egg'),
    (1, 600, 'coriander'),
    (4, 2000, 'tomato sauce'),
    (3, 1800, 'mayonnaise'),
    (2, 1200, 'paprika'),
    (1, 800, 'honey'),
    (4, 2500, 'ground turkey'),
    (5, 3000, 'quinoa'),
    (2, 1500, 'sweet potato'),
    (3, 1800, 'green beans'),
    (1, 1000, 'sour cream'),
    (4, 2500, 'ground pork'),
    (3, 2200, 'cumin'),
    (2, 1200, 'coconut milk'),
    (1, 800, 'red pepper flakes'),
    (5, 3000, 'lentils'),
    (2, 1000, 'shallots'),
    (3, 1800, 'asparagus'),
    (4, 2500, 'turmeric'),
    (1, 800, 'maple syrup'),
    (5, 3000, 'corn'),
    (2, 1200, 'rosemary');

-- -- 3ero
-- -- ESTE NO SE PUEDE CORRER ANTES DE INSERTAR EN TABLAS dishes y ingredients
-- -- esta tabla posiblemente necesite cambiarse si la bd se elimina y se vuelve a llenar de 0
insert into dishingredients (dish_id, ingredient_id) 
values 
 (41, 28),
 (40, 28),
 (34, 23),
 (31, 43),
 (32, 13),
 (33, 23),
 (21, 43),
 (22, 35),
 (23, 36),
 (24, 43),
 (26, 43),
 (1, 1);



-- -- 4to
INSERT INTO customers (address, email, phone, city, lastname, customer_name) VALUES
('carrera 28 #56-78', 'susan_doe@yahoo.com', '5432109876', 'cali', 'doe', 'susan'),
('calle 47 #89-01', 'jack22@hotmail.com', '4321098765', 'bogota', 'stewart', 'jack'),
('avenida 21 #67-89', 'emily@gmail.com', '3210987654', 'barranquilla', 'gonzalez', 'emily'),
('carrera 24 #43-21', 'henry_doe@yahoo.com', '2109876543', 'cartagena', 'doe', 'henry'),
('calle 29 #56-78', 'jessica22@hotmail.com', '1098765432', 'pereira', 'brown', 'jessica'),
('avenida 15 #30-45', 'alex_m@yahoo.com', '9876543210', 'manizales', 'miller', 'alex'),
('carrera 20 #45-67', 'ella99@gmail.com', '8765432109', 'cali', 'flores', 'ella'),
('calle 46 #18-23', 'george_doe@hotmail.com', '7654321098', 'bogota', 'doe', 'george'),
('avenida 23 #30-45', 'mia@gmail.com', '6543210987', 'barranquilla', 'lopez', 'mia'),
('carrera 30 #56-78', 'daniel_doe@yahoo.com', '5432109876', 'cartagena', 'doe', 'daniel'),
('calle 39 #89-01', 'sophia22@hotmail.com', '4321098765', 'pereira', 'rodriguez', 'sophia'),
('avenida 17 #67-89', 'james@gmail.com', '3210987654', 'manizales', 'johnson', 'james'),
('carrera 25 #43-21', 'amber_doe@yahoo.com', '2109876543', 'cali', 'doe', 'amber'),
('calle 32 #56-78', 'chris99@hotmail.com', '1098765432', 'bogota', 'thompson', 'chris'),
('avenida 19 #30-45', 'anna@gmail.com', '9876543210', 'barranquilla', 'torres', 'anna'),
('carrera 22 #45-67', 'william_doe@yahoo.com', '8765432109', 'cartagena', 'doe', 'william'),
('calle 44 #18-23', 'lily22@hotmail.com', '7654321098', 'pereira', 'garcia', 'lily'),
('avenida 18 #30-45', 'nick@gmail.com', '6543210987', 'manizales', 'martinez', 'nick'),
('carrera 27 #56-78', 'sara_doe@yahoo.com', '5432109876', 'cali', 'doe', 'sara'),
('calle 33 #89-01', 'ben22@hotmail.com', '4321098765', 'bogota', 'hernandez', 'ben'),
('avenida 14 #67-89', 'mia@gmail.com', '3210987654', 'barranquilla', 'smith', 'mia'),
('carrera 23 #43-21', 'john_doe@yahoo.com', '2109876543', 'cartagena', 'doe', 'john'),
('calle 28 #56-78', 'olivia22@hotmail.com', '1098765432', 'pereira', 'lopez', 'olivia'),
('avenida 16 #30-45', 'bob_m@yahoo.com', '9876543210', 'manizales', 'brown', 'bob'),
('carrera 11 #45-67', 'emma.jones@gmail.com', '8765432109', 'cali', 'jones', 'emma'),
('calle 40 #18-23', 'leo99@hotmail.com', '7654321098', 'bogota', 'williams', 'leo'),
('avenida 20 #67-89', 'grace@gmail.com', '6543210987', 'barranquilla', 'murray', 'grace'),
('carrera 33 #43-21', 'alex_doe@yahoo.com', '5432109876', 'cartagena', 'doe', 'alex'),
('calle 28 #56-78', 'olivia22@hotmail.com', '4321098765', 'pereira', 'lopez', 'olivia'),
('avenida 14 #30-45', 'bob_m@yahoo.com', '3210987654', 'manizales', 'brown', 'bob'),
('carrera 25 #45-67', 'stella.jones@gmail.com', '2109876543', 'cali', 'jones', 'stella'),
('calle 48 #18-23', 'chris99@hotmail.com', '1098765432', 'bogota', 'rodriguez', 'chris'),
('avenida 10 #30-45', 'eva@gmail.com', '9876543210', 'barranquilla', 'cooper', 'eva'),
('carrera 19 #56-78', 'mark_doe@yahoo.com', '8765432109', 'cartagena', 'doe', 'mark'),
('calle 36 #89-01', 'julia22@hotmail.com', '7654321098', 'pereira', 'johnson', 'julia'),
('avenida 17 #67-89', 'david_m@yahoo.com', '6543210987', 'manizales', 'hernandez', 'david'),
('carrera 31 #43-21', 'sara@gmail.com', '5432109876', 'cali', 'gonzalez', 'sara'),
('calle 22 #56-78', 'michael_doe@yahoo.com', '4321098765', 'bogota', 'doe', 'michael'),
('avenida 16 #30-45', 'mia22@hotmail.com', '3210987654', 'barranquilla', 'perez', 'mia'),
('carrera 27 #45-67', 'robert_smith@gmail.com', '2109876543', 'cartagena', 'smith', 'robert'),
('calle 42 #18-23', 'victor99@hotmail.com', '1098765432', 'pereira', 'torres', 'victor'),
('avenida 18 #30-45', 'angela@gmail.com', '9876543210', 'manizales', 'diaz', 'angela'),
('carrera 29 #56-78', 'brian_doe@yahoo.com', '5432109876', 'cartagena', 'doe', 'brian'),
('calle 34 #89-01', 'lucas22@hotmail.com', '4321098765', 'bucaramanga', 'martin', 'lucas'),
('avenida 13 #67-89', 'lily_m@yahoo.com', '3210987654', 'pereira', 'mendoza', 'lily'),
('carrera 23 #43-21', 'steve@gmail.com', '2109876543', 'manizales', 'ramirez', 'steve'),
('calle 26 #56-78', 'carol_doe@yahoo.com', '1098765432', 'cali', 'doe', 'carol'),
('avenida 11 #30-45', 'chad22@hotmail.com', '9876543210', 'bogota', 'hill', 'chad'),
('carrera 21 #45-67', 'natalie@gmail.com', '8765432109', 'barranquilla', 'robinson', 'natalie'),
('calle 49 #18-23', 'simon99@hotmail.com', '7654321098', 'cartagena', 'simmons', 'simon');



-- -- 5to
INSERT INTO till (
    transaction_type,
    employee_id,
    amount,
    balance,
    location
)
VALUES
    ('cashout', 45653, 70000, 0, 'central'),
    ('cashin', 45653, 76000, -70000, 'central'),
    ('cashin', 45653, 76000, 6000, 'central'),
    ('cashout', 45653, 70000, 6000, 'central'),
    ('cashin', 45653, 60000, 66000, 'central'),
    ('cashin', 45653, 70000, 136000, 'central'),
    ('cashin', 45653, 78000, 214000, 'central'),
    ('cashout', 45653, 50000, 164000, 'central'),
    ('cashout', 45653, 70000, 94000, 'central'),
    ('cashin', 45653, 67000, 161000, 'central'),
    ('cashout', 45653, 23000, 138000, 'central'),
    ('cashin', 45653, 56000, 194000, 'central'),
    ('cashout', 45653, 67000, 133000, 'central'),
    ('cashout', 45653, 23000, 110000, 'central')
;

-- 6to
INSERT INTO orders (
    priority,
    customer_id,
    totalprice,
    till_id
  )
VALUES
  (false,1, 47000,1),
  (false,2, 45000,2),
  (false,3, 450000,5),
  (true,4, 500000,3),
  (true,5, 433500,4);

-- 7to
INSERT INTO order_items (
    quantity,
    totalprice,
    order_id,
    dish_id
  )
VALUES
    (3, 100000,1, 1),
    (2, 200000,2, 22),
    (32, 300000,3, 2),
    (4, 400000,4, 21),
    (2, 401000,5, 31)
;
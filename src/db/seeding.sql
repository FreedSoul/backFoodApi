INSERT INTO customers (
    customer_name,
    orders_id,
    address
  )
VALUES 
('matt',1,'calle falsa 123'),
('minie',3,'calle falsita 123'),
('marah',2,'calle falsota 123'),
('sarah',6,'av siempre viva 123'),
('mike',4,'crr falsa 123'),
('randy',5,'calle falsa 333')
;


-- INSERT INTO dishes (
--     priority,
--     orderitems,
--     customer_id,
--     totalprice
--   )
-- VALUES
--     (true, '{1,2}', 46, 4500),
--     (false, '{2}', 46, 4510),
--     (true, '{1}', 46, 4520),
--     (false, '{2}', 46, 4530),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
-- ;

-- INSERT INTO ingredients (
--     priority,
--     orderitems,
--     customer_id,
--     totalprice
--   )
-- VALUES
--     (true, '{1,2}', 46, 4500),
--     (false, '{2}', 46, 4510),
--     (true, '{1}', 46, 4520),
--     (false, '{2}', 46, 4530),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
-- ;

-- INSERT INTO order_items (
--     priority,
--     orderitems,
--     customer_id,
--     totalprice
--   )
-- VALUES
--     (true, '{1,2}', 46, 4500),
--     (false, '{2}', 46, 4510),
--     (true, '{1}', 46, 4520),
--     (false, '{2}', 46, 4530),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
-- ;

INSERT INTO orders (
    priority,
    orderitems,
    customer_id,
    totalprice
  )
VALUES (
    priority:boolean,
    'orderitems:ARRAY',
    customer_id:integer,
    totalprice:integer
  );

-- INSERT INTO till (
--     priority,
--     orderitems,
--     customer_id,
--     totalprice
--   )
-- VALUES
--     (true, '{1,2}', 46, 4500),
--     (false, '{2}', 46, 4510),
--     (true, '{1}', 46, 4520),
--     (false, '{2}', 46, 4530),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
--     (true, '{1,2}', 46, 4540),
-- ;




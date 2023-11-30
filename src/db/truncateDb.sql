DO $$ 
DECLARE 
    current_table_name text;
    current_table_name_seq text;
BEGIN
    -- Loop through all tables in the schema (public schema in this case)
    FOR current_table_name IN (SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE') 
    LOOP
        -- Build a dynamic SQL statement to truncate the table
        EXECUTE 'TRUNCATE TABLE ' || current_table_name || ' RESTART IDENTITY CASCADE';
    END LOOP;
    FOR current_table_name_seq IN (SELECT sequence_name FROM information_schema.sequences WHERE sequence_schema = 'public' AND data_type = 'integer') 
    LOOP
        -- RAISE NOTICE 'Current: %', current_table_name_seq;
        EXECUTE 'ALTER SEQUENCE ' || current_table_name_seq || ' RESTART WITH 1';
    END LOOP;
END $$;

-- TRUNCATE TABLE till RESTART IDENTITY CASCADE;
-- TRUNCATE TABLE customers RESTART IDENTITY CASCADE;
-- TRUNCATE TABLE orders RESTART IDENTITY CASCADE;
-- TRUNCATE TABLE order_items RESTART IDENTITY CASCADE;
-- TRUNCATE TABLE dishes RESTART IDENTITY CASCADE;
-- TRUNCATE TABLE ingredients RESTART IDENTITY CASCADE;
-- TRUNCATE TABLE dishingredients RESTART IDENTITY CASCADE;
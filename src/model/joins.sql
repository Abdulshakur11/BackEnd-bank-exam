SELECT 
  n.number_of_room_id,
 (n.price_each_square * n.all_meter_of_square) AS house_price,
 (n.price_each_square * n.all_meter_of_square) / 100 * 17 AS starting_paymant,
 ((n.price_each_square * n.all_meter_of_square) - ((n.price_each_square * n.all_meter_of_square) / 100 * 17)) / (10 * 12) AS monthly_paymant
FROM number_of_rooms n 
WHERE n.number_of_room_id = 6 ORDER BY n.number_of_room_id asc;


-- The trigger works before users turn it off
CREATE OR REPLACE FUNCTION insertUsers()
RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$
BEGIN 

  INSERT INTO archivedUsers(user_id, user_name, user_surname, phone_number) 
  VALUES(OLD.user_id, OLD.user_name, OLD.user_surname, OLD.phone_number);
  RETURN OLD;

END;
$$;

CREATE TRIGGER handleDelete
BEFORE DELETE 
ON requests
FOR EACH ROW 
EXECUTE PROCEDURE insertUsers();
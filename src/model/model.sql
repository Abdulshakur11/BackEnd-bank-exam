CREATE DATABASE exam;

CREATE EXTENSION "uuid-ossp";

CREATE TABLE company(
  company_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  company_name varchar(256) NOT NULL,
  company_img text
);
SELECT * FROM company;


CREATE TABLE complex(
  complex_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  complex_name varchar(256) NOT NULL,
  company_id uuid, FOREIGN KEY(company_id) REFERENCES company(company_id) ON DELETE CASCADE
);
SELECT * FROM complex;

CREATE TABLE number_of_rooms(
  number_of_room_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  number_of_room varchar(256) NOT NULL,
  price_each_square bigint NOT NULL,
  all_meter_of_square int NOT NULL,
  address_of_complex text NOT NULL,
  complex_id uuid, FOREIGN KEY(complex_id) REFERENCES complex(complex_id) ON DELETE CASCADE
);
SELECT * FROM number_of_rooms;


CREATE TABLE bank(
  bank_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  bank_name varchar(256) NOT NULL,
  bank_creadit bigint NOT NULL,
  moratge_duration int NOT NULL,
  starting_paymant int NOT NULL,
  bank_service DECIMAL(10, 1) NOT NULL,
  bank_img text
);

SELECT * FROM bank;

CREATE TABLE requests(
  user_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_name VARCHAR(256) NOT NULL,
  user_surname VARCHAR(256) NOT NULL,
  phone_number bigint NOT NULL,
  request_sent_time TIMESTAMPTZ  DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM requests;


CREATE TABLE archivedUsers(
  user_id uuid,
  user_name VARCHAR(256) NOT NULL,
  user_surname VARCHAR(256) NOT NULL,
  phone_number bigint NOT NULL
);

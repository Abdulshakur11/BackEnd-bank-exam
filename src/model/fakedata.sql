-- add company 
insert into company(company_name, company_img) VALUES('Murad buildings', '../../images/murad.png');
insert into company(company_name, company_img) VALUES('Bizning uylar', '../../images/bizning-uylar.png');
insert into company(company_name, company_img) VALUES('Olmazor City', '../../images/olmazor.png');
insert into company(company_name, company_img) VALUES('Golden House', '../../images/golden-house.png');
insert into company(company_name, company_img) VALUES('Akay City', '../../images/akay-city.png');
insert into company(company_name, company_img) VALUES('Toshkent City', '../../images/toshkent-city.png');

-- add complex
INSERT INTO complex(complex_name, company_id) VALUES('Nest One', 1);
INSERT INTO complex(complex_name, company_id) VALUES('NRG OYBEK', 1);
INSERT INTO complex(complex_name, company_id) VALUES('Bizning uylar yunosobod', 2);
INSERT INTO complex(complex_name, company_id) VALUES('Bizning uylar choshtepa', 2);
INSERT INTO complex(complex_name, company_id) VALUES('Olmazor Business City', 3);
INSERT INTO complex(complex_name, company_id) VALUES('Olmazor Bektopi', 3);
INSERT INTO complex(complex_name, company_id) VALUES('Akay City Chilonzor', 5);
INSERT INTO complex(complex_name, company_id) VALUES('Akay City Bektemir', 5);


-- add number of rooms
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(2, 2100000, 33, 'Drujba Narodov 2`chi tor ko`cha', 1);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(3, 3100000, 45, 'Drujba Narodov 2`chi tor ko`cha', 1);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(4, 4530000, 54, 'Drujba Narodov 2`chi tor ko`cha', 1);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(5, 5640000, 68, 'Drujba Narodov 2`chi tor ko`cha', 1);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(6, 7600000, 120, 'Drujba Narodov 2`chi tor ko`cha', 1);

INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(2, 5500000, 34, 'Inter nation o`quv markazi yonida', 2);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(3, 6100000, 64, 'Inter nation o`quv markazi yonida', 2);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(4, 6950000, 74, 'Inter nation o`quv markazi yonida', 2);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(5, 7240000, 84, 'Inter nation o`quv markazi yonida', 2);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(6, 8990000, 104, 'Inter nation o`quv markazi yonida', 2);

INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(2, 5500000, 36, 'Chilonzor Najot Ta`lim o`quv markazi yonida', 3);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(3, 6100000, 66, 'Chilonzor Najot Ta`lim o`quv markazi yonida', 3);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(4, 6950000, 79, 'Chilonzor Najot Ta`lim o`quv markazi yonida', 3);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(5, 7240000, 80, 'Chilonzor Najot Ta`lim o`quv markazi yonida', 3);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(6, 8990000, 100, 'Chilonzor Najot Ta`lim o`quv markazi yonida', 3);

INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(2, 5300000, 36, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 4);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(3, 6100000, 66, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 4);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(4, 7050000, 79, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 4);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(5, 7940000, 80, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 4);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(6, 9990000, 115, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 4);


INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(2, 5300000, 36, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 5);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(3, 6100000, 66, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 5);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(4, 7050000, 79, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 5);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(5, 7940000, 80, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 5);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(6, 9990000, 115, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 5);


INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(2, 5300000, 36, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 6);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(3, 6100000, 66, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 6);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(4, 7050000, 79, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 6);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(5, 7940000, 80, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 6);
INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES(6, 9990000, 115, 'Bektemir 1`chi daxa 6`chi tor ko`cha', 6);
-- add bank
INSERT INTO bank(bank_name, bank_creadit, moratge_duration, starting_paymant, bank_service, bank_img) VALUES('Xalq Banki', 950000000, 10, 17, 2.3, '../../images/xalq-bank.png');
INSERT INTO bank(bank_name, bank_creadit, moratge_duration, starting_paymant, bank_service, bank_img) VALUES('NBU', 780000000, 15, 18, 2.5, '../../images/nbu.png');
INSERT INTO bank(bank_name, bank_creadit, moratge_duration, starting_paymant, bank_service, bank_img) VALUES('Ravnaq Bank', 850000000, 20, 17, 2.3, '../../images/ravnaq-bank.png');
INSERT INTO bank(bank_name, bank_creadit, moratge_duration, starting_paymant, bank_service, bank_img) VALUES('Asia Allians Bank', 690000000, 25, 12, 2.5, '../../images/asia_alianse_bank.png');


 
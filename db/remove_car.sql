delete from car_mod cm
where cm.car_id = ${car_id};
delete from car_important ci
where ci.car_id = ${car_id};
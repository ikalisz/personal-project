select * from car_important ci
join car_mod cm
on ci.car_id = cm.car_id
where ci.car_id = ${car_id}
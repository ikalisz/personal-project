select * from car_important ci
join car_mod cm
on cm.car_id = ci.car_id
where ci.user_id = ${user_id};
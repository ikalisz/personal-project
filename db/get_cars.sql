select * from car_important ci
full join car_mod cm
on cm.car_id = ci.car_id and cm.mod_id is not null
where ci.user_id = ${user_id};
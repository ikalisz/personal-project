select * from repairs r
join car_important ci
on r.car_id = ci.car_id
join users u
on r.user_id = u.user_id
where r.status = 'Finished' order by date_finished desc;
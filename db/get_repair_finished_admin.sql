select * from repairs r
join car_important ci
on r.car_id = ci.car_id
where r.status = 'Finished' order by date_finished desc;
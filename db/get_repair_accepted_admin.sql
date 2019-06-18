select * from repairs r
join car_important ci
on r.car_id = ci.car_id
where r.status = 'Accepted' order by date_accept desc;
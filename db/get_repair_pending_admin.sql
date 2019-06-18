select * from repairs r
join car_important ci
on r.car_id = ci.car_id
where r.status = 'Pending' order by r.date_submitted desc;
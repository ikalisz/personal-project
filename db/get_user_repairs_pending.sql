select * from repairs r
join car_important ci
on r.car_id = ci.car_id
where r.user_id = ${user_id} and r.status === 'Pending'
order by date_submitted desc;
select * from repairs r
join users u
on r.user_id = u.user_id
where r.user_id = ${user_id} and r.status === 'Ongoing'
order by date_submitted desc;
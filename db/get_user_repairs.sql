-- select * from repairs r
-- join users u
-- on r.user_id = u.user_id
-- where r.user_id = ${user_id}
-- group by  repair_id, u.user_id, status
-- order by date_submitted desc;
select * from repairs r
join users u
on r.user_id = u.user_id
where r.user_id = ${user_id}
group by  repair_id, u.user_id, status
order by date_submitted desc;
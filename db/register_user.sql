insert into users (firstname, lastname, phone, email, username, password, pic)
values (${firstname}, ${lastname}, ${phone}, ${email}, ${username}, ${password}, ${pic}) returning *;
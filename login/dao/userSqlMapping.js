var user = {
    checkUser : 'select * from user where phone=?',
    register : 'insert into user(username, phone, password)values(?,?,?)'
};

module.exports = user;

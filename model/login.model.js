const query = "select username from login where username = ? and password = md5(?)";

module.exports = query;
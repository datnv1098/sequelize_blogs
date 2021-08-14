const db = require('../models')
const User = db.User
const Op = db.Sequelize.Op
var crypto = require('crypto-js');
exports.create = (req, res) => {
	let password = crypto.AES.encrypt(req.body.password, process.env.PASSWD_SECRET).toString();
	const user = {
		username: req.body.username,
		phone: req.body.phone,
		email: req.body.email,
		avt: '',
		password: password,
		permistion: '1'
	};
	User.create(user)
		.then(() => res.render('index'))
		.catch(() => res.render('auth/register'));
};

exports.findAll = async () => {
	let users = await User.findAll({ raw: true });
	return users
};

exports.findOne = async (req, res) => {
	const user = await User.findOne({ where: { username: req.body.username } })
	if (!user) return null
	const bytes = crypto.AES.decrypt(user.password, process.env.PASSWD_SECRET);
	const pass = bytes.toString(crypto.enc.Utf8);
	if (pass == req.body.password) return user
	return user
};

exports.update = async (req, res) => {
	const user = await User.update({ avt: `${req.body.image}` }, { where: { iduser: req.session.user.iduser } })
	return user
};

exports.delete = async (username) => {
	const deleted = await User.destroy({ where: { username: username } })
	return deleted
};
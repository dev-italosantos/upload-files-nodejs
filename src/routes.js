const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('multer');

routes.post("/posts", multer().single('file'), (req, res) => {
	return res.json({ hello: 'World'});
});

module.exports = routes;
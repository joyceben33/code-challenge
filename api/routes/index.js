const express = require("express");
const router = express.Router();
const data = require("../data/sample.json");

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", {
		title: "Express"
	});
});

router.get("/data", function(req, res, next) {
	res.json(data);
})

module.exports = router;

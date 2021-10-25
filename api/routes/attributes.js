const express = require("express");
const router = express.Router();
const data = require("../data/sample.json");
const logger = require ('../logger.js');

router.get("/", function(req, res, next) {
	const attribute = req.body
	const attrType = Object.keys(attribute)[0] ?? '';
	if (!attrType) {
		res.status(204).json({
			message: "No Content in the Request Body"
		})
		return
	}
	const attrValue = attribute[attrType];
	logger.info(`Recieved request for loans by ${attrType}`)

	const loansByAttribute = data.filter(loan => loan[attrType] === attrValue);

	res.json(loansByAttribute);
	
})

module.exports = router

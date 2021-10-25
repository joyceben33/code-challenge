const express = require("express");
const router = express.Router();
const data = require("../data/sample.json");
const logger = require ('../logger.js');

router.get("/", function(req, res, next) {
	const attribute = req.query

	const attrType = Object.keys(attribute)[0] ?? '';
	logger.info(JSON.stringify(attrType))
	if (!attrType) {
		res.status(204).json({
			message: "No Content in the Request Body"
		})
		return
	} 

	let attrValue = attribute[attrType];
	if (attrType === 'id') {
		attrValue = +(attrValue)
	} else if (attrType === 'state') {
		attrValue = attrValue.toUpperCase();
	}
	logger.info(`Recieved request for loans by ${attrType}`)

	const loansByAttribute = data.filter(loan => loan[attrType] === attrValue);

	res.json(loansByAttribute);
	
})

module.exports = router

const express = require("express");
const router = express.Router();
const data = require("../data/sample.json");
const logger = require ('../logger.js')


router.get("/", function(req, res, next) {
	res.json(data);
	console.log(req.body)
})

router.get("/:loanNumber", function(req, res, next) {
	const { loanNumber } = req.params
	logger.info(loanNumber)
    const dataSet = [...data]
	const matchingIndex = dataSet.findIndex(loan => loan.loan_number === loanNumber)

	if (matchingIndex >= 0) {
		const loan = dataSet[matchingIndex];
		res.json(loan)
	} else {
		res.status(404).json({
			message: `Loan number ${loanNumber} was not found.`
		})

	}

})


module.exports = router

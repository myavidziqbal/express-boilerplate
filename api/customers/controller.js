const models = require("../models")

exports.post = (req,res) => {
    models.customers
    .create(req.body)
    .then(customers => res.send(customers))
    .catch(err => res.send(err))
}
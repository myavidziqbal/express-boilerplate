const models = require("../models");

exports.getAll = (req, res) => {
  models.products
    .findAll()
    .then(products => res.send(products))
    .catch(err => console.log(err));
};

exports.post = (req, res) => {
  models.products
    .create(req.body)
    .then(product => res.send(product))
    .catch(err => res.send(err));
};

exports.deleteOne = (req, res) => {
  models.products
    .findOne({ where: { id: req.params.id } })
    .then(products => products.destroy())
    .then(result => res.send(result))
    .catch(err => res.send(err));
};

exports.search = (req, res) => {
  models.products
    .findAll({
      where: req.query
    })
    .then(products => res.send(products))
    .catch(err => res.send(err));
};

exports.update = (req, res) => {
  models.products
    .update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

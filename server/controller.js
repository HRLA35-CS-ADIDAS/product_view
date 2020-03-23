var helpers = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    helpers
    .get()
    .then((result)=> res.status(200).send(result))
    .catch(err => res.status(400).send(err))
  },
  getOne: (req, res) => {
    helpers
    .getOne(req.params.id)
    .then((result)=> res.status(200).send(result))
    .catch(err => res.status(400).send(err))
  }
}

module.exports = controller;
const router = require('express').Router()
let Drink = require('../models/Drink')


//logger for coffee routes

//get all
router.get('', (req, res, next) => {
  Drink.find({})
    .then(drinks => {
      res.status(200).send(drinks)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

router.post('', (req, res, next) => {
  Drink.create(req.body)
    .then(drink => {
      res.status(201).send(drink)
    })
})


router.get('/:id', (req, res, next) => {
  Drink.findById(req.params.id)
    .then(drink => {
      res.status(200).send(drink)
    })
})


module.exports = router
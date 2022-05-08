const homeBanner = require('../models/homeBanner')
const destination = require('../models/destination')
const specialty_dish = require('../models/special_dish')
const { multipleMongooseToObject } = require('../ulti/mongoose');
class siteControllers {
    //GET /home
    home(req, res, next) {
        homeBanner.find({})
            .then(banner => {
                return banner = multipleMongooseToObject(banner)
            })
            .then(banner => {
                destination.find({})
                    .then(destinations => {
                        return destinations = multipleMongooseToObject(destinations)
                    })
                    .then(destinations => {
                        specialty_dish.find({})
                            .then(dishs => {
                                return dishs = multipleMongooseToObject(dishs)
                            })
                            .then(dishs => {
                                res.render('home', {
                                    banner,
                                    destinations,
                                    dishs
                                })
                            })
                            .catch(err => next(err))
                    })
                    .catch(err => next(err))
            })
            .catch(err => next(err))
    }
}
module.exports = new siteControllers;
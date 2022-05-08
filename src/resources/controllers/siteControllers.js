const homeBanner = require('../models/homeBanner')
const destination = require('../models/destination')
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
                        res.render('home', {
                            banner,
                            destinations
                        })
                    })
                    .catch(err => next(err))
            })
            .catch(err => next(err))
    }
}
module.exports = new siteControllers;
const homeBanner = require('../models/homeBanner')
const { multipleMongooseToObject } = require('../ulti/mongoose');
class siteControllers {
    //GET /home
    home(req, res, next) {
        homeBanner.find({})
            .then(items => {
                res.render('home', {
                    items: multipleMongooseToObject(items),
                })
            })
            .catch(err => next(err))
    }
}
module.exports = new siteControllers;
const siteRoutes = require('./siteRoutes')

function route(app) {
    app.use('/', siteRoutes);
}
module.exports = route;
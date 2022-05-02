const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/KLTN');
        console.log('success!')
    } catch (err) {
        console.log('fail!')
    }
}
module.exports = { connect };
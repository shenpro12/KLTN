const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://shenpro12:01666269760az@levandat.9bno3.mongodb.net/KLTN?retryWrites=true&w=majority');
        console.log('success!')
    } catch (err) {
        console.log('fail!')
    }
}
module.exports = { connect };
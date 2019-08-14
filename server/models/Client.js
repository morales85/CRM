const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    name: String,
    country: String,
    owner: String,
    emailType: String,
    sold: String,
    firstContact: String,
})

const Client = mongoose.model("Client", clientSchema)
module.exports = Client
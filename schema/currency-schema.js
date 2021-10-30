const {Schema, model} = require('mongoose')

module.exports = model("CurrencyDB", new Schema ({
  UserId: String,
  Balance: Number,
}))
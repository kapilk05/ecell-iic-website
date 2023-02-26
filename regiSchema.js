const mongoose = require('mongoose')
const validator = require('validator')

const schema = new mongoose.Schema(
    {
        tName: {
            type: String,
            required: true,
            unique: true
            // validate: (value) => {
            //     return validator.notEmpty(value)
            // }
        },
        eMail: {
            type: String,
            required: true,
            unique: true
        },
        pwd: {
            type: String,
            required: true
        },
        cfPwd: {
            type: String,
            required: true
        },
        mobNo: {
            type: Number,
            required: true
        }
    }
)

const User = mongoose.model('User', schema)

module.exports = {
    schema: schema,
    User: User
}
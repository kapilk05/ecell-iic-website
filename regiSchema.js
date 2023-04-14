const mongoose = require('mongoose')
const validator = require('validator')
const { default: isEmail } = require('validator/lib/isEmail')

// schema of the main database : database that lists all the teams

const dbSchema = new mongoose.Schema(
    {
        tName: {
            type: String,
            required: true,
            unique: true
            // validate: (value) => {
            //     return validator.notEmpty(value)
            // }
        },
        tLead: {
            type: String,
            required: true,
        }
    }
)

const Database = mongoose.model('Database', dbSchema)

// schema of a team : attributes of an individual team

const teamSchema = new mongoose.Schema(
    {
        pName: {
            type: String,
            required: true
        },
        mobNo: {
            type: Number,
        },
        eMail: {
            type: String,
            unique: true
        },
        tName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Database',
            required: true
        }
    }
)

const Team = mongoose.model('Team', teamSchema)

module.exports = {
    dbSchema: dbSchema,
    Database: Database,
    teamSchema: teamSchema,
    Team: Team
}
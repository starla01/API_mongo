'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: "Name of the user"
    },
    gender: {
        type: String,
        required: "Gender"
    },
    mail: {
        type: String,
        required: "Mail of the user"
    }

});

module.exports = mongoose.model('Users', UserSchema);
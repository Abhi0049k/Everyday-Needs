const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    }
})

const blacklistModel = mongoose.model('blacklistToken', blacklistTokenSchema);

module.exports = blacklistModel;

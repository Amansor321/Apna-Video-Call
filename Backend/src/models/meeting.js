const mongoose = require("mongoose");
const meetingSchema= mongoose.Schema({
    user_id:{
        type:String
    },
    meetingCode:{
        type:String,
        // default:Date.now,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    }
});


module.exports = mongoose.model("Meeting",meetingSchema);


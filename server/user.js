const mongoose = require("mongoose"); // The reason for this demo.
let Schema = mongoose.Schema;

const schema = new Schema({
    firstName: String,
    lastName: String,
    userName: String
});

// mongoose.set('debug', true);

mongoose.set('debug', function(coll, method, query, doc){
   console.log(coll);
   console.log(method);
   console.log(query);
   console.log(doc);
});

const userSchema = mongoose.model('userSchema', schema);

module.exports = userSchema;
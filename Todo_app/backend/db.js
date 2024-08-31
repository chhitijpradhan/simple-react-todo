const mongoose = require("mongoose");
//mongodb+srv://chhitijpradhan13:eCvXs7QUXPf2suP1@chiti.1vi5uvu.mongodb.net/

mongoose.connect("mongodb+srv://chhitijpradhan13:eCvXs7QUXPf2suP1@chiti.1vi5uvu.mongodb.net/todos")
const todoSchema = mongoose.Schema ({
    title : String,
    description : String,
    commpleted : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports ={ 
    todo
}
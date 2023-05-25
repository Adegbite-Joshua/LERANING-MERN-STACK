const mongoose = require('mongoose');
const bycrypt = require('bcryptjs'); 

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true, unique: true	},
    password: { type: String, required: true}
})

let saltRiunds = 10;
userSchema.pre('save', function(next){
    console.log(this.password)
    bycrypt.hash(this.password, saltRiunds)
    .then((hashedPassword)=>{
        this.password = hashedPassword
        console.log(this.password);
        next()
    })
    .catch((err)=>{
        err
    })
} )
const userModel = mongoose.model('students', userSchema)

module.exports = userModel
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
     name: {type: String , required: true},
     email: {type: String , required: true , unique: true},
     password: {type: String , required: true},
     pic: {
        type: String , 
        default: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=826&t=st=1709929910~exp=1709930510~hmac=02430e66b0891ca36e6e5c025753718e69a989130428369b6a6630e94bd3cd74"
     }
},
{
    timestamps: true
}

);

userSchema.methods.matchPassword= async function(enteredPass){
return await bcrypt.compare(enteredPass , this.password);
}

// password encyption using bcryptjs
userSchema.pre('save' , async function(next){
    if(!this.isModified){  //isModified is an inbuilt function
        next();
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password , salt)
});

const User = mongoose.model("User" , userSchema);
module.exports = User;
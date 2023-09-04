import mongoose from "mongoose";

// Create schema
const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true, 

    }, 
    email:{
        type: String, 
        required: true
    },
    password:{
        type: String, 
        required: true, 
        minlength: 6 //Minimum password length 
    },
    firstName: String,
    LastName: String, 
    Address: String, 
    PhoneNumber: String, 
    createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
})

// Update the updatedAt timestamp before saving
UserSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
  });
  
  // Update the updatedAt timestamp before updating
  UserSchema.pre('findOneAndUpdate', function () {
    this.set({ updatedAt: new Date() });
  });

  export default mongoose.model("User", UserSchema)
  
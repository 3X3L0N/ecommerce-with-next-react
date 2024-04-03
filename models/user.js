import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: 1,
        maxLength : 20,
    },
    email:{
       type: String,
       require: [true, "Name is required"],
       index : true, 
       lowercase : true,
       unique: true,
       trim:true,
       minLength:5,
       maxLength : 20,
    },
    password :String,
    role:{
        type:String,
        default: "user,"
    },
    image: String,
    resetCode: {
        data : String,
        expiredAt:{
            type: Date,
            default: () => new Date(Date.now() + 10 * 60 *1000),
        },
    },
},
 {timestamps: true},
);


userSchema.plugin(uniqueValidator);

export default mongoose.models.User || mongoose.model("User",userSchema);
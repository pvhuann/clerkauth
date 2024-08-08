import { model, models, Schema } from "mongoose";


const UserSchema= new Schema({
    clerkId: {
        type: String,
        unique: true,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    lastname: {
        type: String,
    },

})

const User = models?.User || model("User", UserSchema);
export default User;
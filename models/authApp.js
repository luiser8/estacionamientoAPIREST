import mongoose from 'mongoose';

const authAppSchema = mongoose.Schema({
    appName: {type: String, required: true},
    appPassword: {type: String, required: true},
    appToken: {type: String, required: false},
},{timestamps:true});

const AuthApp = mongoose.model('AuthApp', authAppSchema);

export default AuthApp;
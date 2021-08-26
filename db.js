import mongoose  from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

    var db = mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(db => console.log('online')).catch(err => console.error(err));
    
export default db;
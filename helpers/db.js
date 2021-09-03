import mongoose  from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

    let db = await mongoose.connect(process.env.DB, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then().catch(err => console.error(err));
    
export default db;
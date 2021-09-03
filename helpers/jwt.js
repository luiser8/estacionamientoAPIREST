import expressJwt from 'express-jwt';
import dotenv from 'dotenv';

dotenv.config();

const jwt = () => {
    let secret  = process.env.SECRET;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            '/',
            '/api/v1/auth/authenticate'
        ]
    });
}

export default jwt;